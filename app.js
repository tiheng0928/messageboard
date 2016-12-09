// node 預設模組
var path = require('path');
var firebase = require("firebase");
  var config = {
    apiKey: "AIzaSyBWwFFZEZR-B5vnbx844HYxk0erOWNuwV0",
    authDomain: "nodejs-messageboard.firebaseapp.com",
    databaseURL: "https://nodejs-messageboard.firebaseio.com",
    storageBucket: "nodejs-messageboard.appspot.com",
    messagingSenderId: "1058312940015"
  };
  firebase.initializeApp(config);

// NPM 模組
var app = require('express')();
var partials = require('express-partials');
var static = require('serve-static');

var favicon = require('serve-favicon');    

// parse application/x-www-form-urlencoded 
// 讓回傳的值可以解析 json與 urlencoded


// 版型設定
app.use(partials());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//設定預設指定目錄
app.use( static( path.join( __dirname, 'public' )));

//預設favicon.ico位置
app.use(favicon(__dirname + '/public/favicon.ico'));

//路徑設定，有get與post指令
app.get('/', function(req, res){res.render('index')});
//app.post('/post',page.post);
//app.post('/postAjax',page.postAjax);
//app.get('/getAjax',page.getAjax);
//app.get('/getJson', page.getJson);

//偵測3000 port
app.listen(3000);

console.log('open');