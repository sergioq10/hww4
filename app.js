const express = require("express");
const faker = require("faker"); //calling faker
const app = express();


app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//finding random name 
var fakerName = faker.name.findName();  //faker variable random name

  //  res.render("fileToRender.ejs", {"variableName":value});
 
    
//routes
app.get("/", function(req, res){
    res.render("index.html", {"name":fakerName});
});

app.get("/cplusplus", function(req,res){
    res.render("cplusplus.html", {"name":fakerName});
});

app.get("/sql", function(req,res){
    res.render("sql.html", {"name":fakerName});
});

app.get("/javascript", function(req,res){
    res.render("javascript.html", {"name":fakerName}); 
});





//server listener

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is running...");
});