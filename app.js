var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("hi harsh!!");
});
    app.listen(3000, function() { 
    console.log('Server listening on port 3000');
    });
    app.get("/bye",function(req,res){
        res.send("goodbye!!");
    });
    app.get("/r/:subbedditname",function(req,res){
        var sub = req.params.subbedditname;
        res.send("welcome to "+ sub +" subeddit");
    });
    app.get("/r/:subbedditname/comments/:id/:title",function(req,res){
        res.send("welcome to comment page");
    });
    app.get("*",function(req,res){
        res.send("you are a star!!");
    });