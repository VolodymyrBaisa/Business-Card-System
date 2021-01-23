import axios from "axios";

export default {
    all: function () {
        return axios.get("/api/cards");
    },
    getById: function (id) {
        return axios.post("/api/cards/" + id);
    },
};
