var light=require("ueklight");
var router=light.Router();
router.get("/",function(req,res){
    res.render("index.html",{name:"light"});
})