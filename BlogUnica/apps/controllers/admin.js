var express = require("express");
var router = express.Router();

router.get("/sigup",function(req,res){
    res.render("sigup", {data: {}});
});

router.post("/sigup",function(req,res){
    var user = req.body;
    if(user.email.trim().length == 0){
        res.render("sigup",{data: {error: "email is required"}});
    }

    if(user.password != user.repassword && user.password.trim().length != 0){
        res.render("sigup",{data: {error: "Password not match"}});
    }

    // 

});

// router.post("/si")
module.exports = router;