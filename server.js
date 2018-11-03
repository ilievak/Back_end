//import express package and save it in the express variable
var express = require('express');

//import DB
var db=require('./database');


//create a new isntance of express and save it in a variable called app
var app=express();
//initialise the server with required plugins
var bodyParser=require('body-parser');

//create application
app.use(bodyParser.urlencoded({extended:false}));



//prepare db connection parametes
const databaseData = {
    host:"127.0.0.1",
    user: "root",
    password: "Shisho",
    database: "304_db",
    port: "3306"
};

//save the port globally
var port=8080;




app.get('/', function (req, res) {
	
    var output = "test";

    res.send(output);
		
});

app.listen(port, err => {
	if (err) {
		console.error(err)
	} else {
		console.log(`App is ready on port ${port}`)
	}
})

