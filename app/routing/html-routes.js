
// // DEPENDENCIES
// // We need to include the path package to get the correct file path for our html
// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');
// var friends = require('./app/data/friends.js');

// // EXPRESS CONFIGURATION
// // This sets up the basic properties for our express server 

// var app = express(); // Tells node that we are creating an "express" server
// var PORT = 3000; 

// // ROUTING


// module.exports = function(app){

// 	// HTML GET Requests
// 	// Below code handles when users "visit" a page. 
// 	// In each of the below cases the user is shown an HTML page of content

// 	app.get('/', function(req, res){
// 		res.sendFile(path.join(__dirname + './../public/home.html'));
// 	});


// 	app.get('/survey.html', function(req, res){
// 		console.log('work');
// 		res.sendFile(path.join(__dirname + './../public/survey.html'));
// 	});

// }