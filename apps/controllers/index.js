var express= require("express");

var router =express.Router();




router.use("/admin",require(__dirname+"/admin.js" ));
router.use("/blog",require(__dirname+"/blog.js" ));
router.get("/", function(req,res){
    res.render("homepage");
});
router.get("/signup",function(req,res){
    res.render("signup", {data: {}});
});
router.post("/signup",function(req,res){
    var user= req.body;
    if (user.email.trim().length==0){
        res.render("signup",{data:{error:"Email is not empty"}})
    }
    if( user.password != user.rePassword && user.password.trim().length!=0){
        res.render("signup",{data:{error:"password no match"}})
    }
})

module.exports= router;