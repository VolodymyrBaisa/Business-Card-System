require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
}
app.use(routes);
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbc_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`API Server now listening on PORT ${PORT}!`);
});
