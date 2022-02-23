var express =require("express");
var router=express.Router();


router.get("/",function(req,res){
    res.json({"messange": "this is blog page"});
})


module.exports = router;