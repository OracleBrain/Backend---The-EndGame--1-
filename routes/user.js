const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Learn More and more");

// schema matlab aapko ye batana banne waala har document main kya kya hoga

const username = mongoose.Schema({
    username: String,
    name: String,
    age: Number
})

module.exports = mongoose.model("user", schema);