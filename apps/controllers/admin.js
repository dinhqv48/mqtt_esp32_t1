var express =require("express");
var router=express.Router();


router.get("/",function(req,res){
    res.json({"messange": "this is admin page"});
})


module.exports = router;