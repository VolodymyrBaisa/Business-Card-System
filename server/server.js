require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { mongoOptions, sessionOptions } = require("./utils/config");
const routes = require("./routes");

const app = express();
const session = require("express-session");
const passport = require("./utils/passport");
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
}

app.use(express.static(path.join(__dirname, "public")));

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/dbc_db",
    mongoOptions
);

app.listen(PORT, () => {
    console.log(`API Server now listening on PORT ${PORT}!`);
});
