var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyABPXDQF82jb6fl7zjAWyFYXZpWM1kijNs",
    authDomain: "webproject-1cc46.firebaseapp.com",
    databaseURL: "https://webproject-1cc46.firebaseio.com",
    storageBucket: "webproject-1cc46.appspot.com",
    messagingSenderId: "901093485324"
 };

firebase.initializeApp(config);

var Message = sequelize.define('message', {
    id:{ 
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username: { //誰留的言
        type: Sequelize.STRING(30)
    },
    content: { //留言的内容
        type: Sequelize.TEXT
    }
});
Message.sync(); //建立表