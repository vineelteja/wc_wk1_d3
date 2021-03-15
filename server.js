var express = require('express')
var path = require("path")
var app = express()

app.get("/components", function(req, res){
    res.render('WEBSITE')
})

app.use(express.static(__dirname + '/public/'));

// app.engine('pug', require('pug').__express)
app.set("views", path.join(__dirname, 'views'))
app.set("view engine", 'pug')
app.listen(3000, ()=>{
    console.log("started listening at port 3000")
})
