var shell=require("shelljs/global");

mkdir("light");
mkdir("-p",["light/views","light/router","light/static"])

mkdir("-p",["light/static/css","light/static/js","light/static/img"])
echo(`var light=require("ueklight");
require("./router/index")
var query=require("uekquery");
var body=require("uekpost");
var cookie=require("uekcookie");
var app=light();
app.use(query());
app.use(body());
app.use(cookie("12312"));
app.listen(8888);`).to("light/app.js")

echo(`{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start":"node app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "uekcookie": "1.0.0",
    "uekquery": "1.0.0",
    "uekpost": "1.0.0"
  }
}`).to("light/package.json");


echo(`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/css/index.css">
</head>
<body>
  <%=name%>
</body>
</html>`).to("light/views/index.html");


echo(`var light=require("ueklight");
var router=light.Router();
router.get("/",function(req,res){
    res.render("index.html",{name:"light"});
})`).to("light/router/index.js");


echo(`*{
    color:red;
}`).to("light/static/css/index.css")
