var friendData 		= require('../data/friends.js');
var path 			= require('path');

// API GET Requests - when users "visit" a page. 
// (ex:localhost:PORT/api/admin...they are shown a JSON of the data in the table) 

// var totalDifference = 0;

// module.exports = function(app){
// 	app.get('/api/friends', function(req, res){
// 		res.json(friendData.friends);
// 	});

// //API POST Request-handles when user submits a form & thus submits data to the server.
// // In each of the below cases, when a user submits form data (a JSON object)
// // ...the JSON is pushed to the appropriate Javascript array


// 	app.post('/api/friends', function(req, res){

// 		var greatMatch = {
// 			name: "",
// 			image: "",
// 			matchDifference: 1000
// 		};
// 		var usrData 	= req.body;
// 		var usrName 	= usrData.name;
// 		var usrImage 	= usrData.image;
// 		var usrScores 	= usrData.scores;

// 		var totalDifference = 0;

// 		//loop through the friends data array of objects to get each friends scores
// 		for(var i = 0; i < friendData.friends.length-1; i++){
// 			console.log(friendData.friends[i].name);
// 			totalDifference = 0;

// 			//loop through that friends score and the users score and calculate the 
// 			// absolute difference between the two and push that to the total difference variable set above
// 			for(var i = 0; i < 10; i++){
// 				// We calculate the difference between the scores and sum them into the totalDifference
// 				totalDifference += Math.abs(parseInt(usrScores[i]) - parseInt(friendData.friends[i].scores[i]));
// 				// If the sum of differences is less then the differences of the current "best match"
// 				if (totalDifference <= greatMatch.friendDifference){

// 					// Reset the bestMatch to be the new friend. 
// 					greatMatch.name = friendData.friends[i].name;
// 					greatMatch.photo = friendData.friends[i].photo;
// 					greatMatch.matchDifference = totalDifference;
// 				}
// 			}
// 		}

// 		friends.push(usrData);
 
// 		res.json(greatMatch);
// 	});
// };