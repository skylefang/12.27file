var light=require("ueklight");
var router=light.Router();
var mysql= require('mysql');
/*var uekquery= require('uekquery');*/
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myapp'
});

router.get("/",function(req,res){
    connection.query("select * from demo",function (err,result) {
        if(err){
            res.end();
        }else{
            res.render("index.html",{result:result})
        }
    })

})
