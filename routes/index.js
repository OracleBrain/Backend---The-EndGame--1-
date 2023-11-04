var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res) {
    res.render("index");
});


router.get("/create", async function (req, res) {
    const createduser = await userModel.create({
        username: "aashis",
        age: 25,
        name: "aashis"
    });
    res.send("created");
});

router.get("/allusers", async function (req, res) {
    let allusers = await userModel.find()
    res.send(allusers);
})    

module.exports = router;
