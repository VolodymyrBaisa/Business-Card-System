const bcrypt = require("bcrypt");

module.exports.getHash = async (password, rounds) => {
    try {
        return await bcrypt.hash(password, rounds);
    } catch (err) {
        console.log(err);
    }
};
