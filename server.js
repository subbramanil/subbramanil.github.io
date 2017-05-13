/**
 * Created by Subbu on 7/6/15.
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var request = require('request');

app.set('views',[__dirname,__dirname + '/app/partials']);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var oneDay = 86400000;
app.use("/static",express.static(__dirname + '/app/static',{maxAge: oneDay}));
app.use("/lib",express.static(__dirname + '/app/lib',{maxAge: oneDay}));
app.use("/app",express.static(__dirname + '/app',{maxAge: oneDay}));

require('./appRouter')(app, request);

require('./rest')(app, request);

var server = http.listen(process.env.PORT || 5003, function(){
    console.log("Server is ready at port "+ server.address().port);
});
