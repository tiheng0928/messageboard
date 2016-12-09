var express = require('express');  
var app = express();
var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBWwFFZEZR-B5vnbx844HYxk0erOWNuwV0",
    authDomain: "nodejs-messageboard.firebaseapp.com",
    databaseURL: "https://nodejs-messageboard.firebaseio.com",
    storageBucket: "nodejs-messageboard.appspot.com",
    messagingSenderId: "1058312940015"
  };
  firebase.initializeApp(config);

app.set('view engine', 'ejs');  
app.set('port', (process.env.PORT || 3000));

//index page
app.get('/', function(req, res) {  
 	//取得的資料程式
	var db = firebase.database(); 
    res.render('pages/index', {
    });
 });

var server = app.listen(app.get('port'), function() {  
  console.log('Listening on port 3000');  
 });