var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js');
var profile = require('./public/controllers/profileCtrl.js');
var user = require('./public/controllers/userCtrl.js');
// var mainCtrl = require('./public/mainCtrl');

var app = express();

var corsOptions = {
	origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(session({
	secret: config.sessionSecret,
 	saveUninitialized: true,
 	resave: true
}));
app.use(express.static(__dirname + '/public'));


app.post('/api/login',user.login);

app.get('/api/profiles', profile.getFriends);



var port = 3000;
app.listen(port, function(){
  console.log("hello world", port);
});
