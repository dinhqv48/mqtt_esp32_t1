var express= require("express");
var bodyParser= require("body-parser")
var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("views",__dirname+"/apps/views");
app.set("view engine","ejs");
app.use("/static", express.static(__dirname+"/public"));
var config=require("config");

var controllers= require(__dirname+"/apps/controllers");
app.use(controllers);


var host= config.get("server.host");
var port= config.get("server.port");
app.listen( port, function(req,res){
    console.log("Server on port : "+port);
    console.log("Server on host : "+host);
});


var mosca = require('mosca');
var settings = {
    port : 1888,
    http: {
          port: 1889,
          bundle: true,
          static: './'
        }
		}

var server = new mosca.Server(settings);
// var mosca = require("mosca");
// var server = new mosca.Server({
//   http: {
//     port: 1888,
//     bundle: true,
//     static: './'
//   }
// });
// fired client is connected
server.on('clientConnected', function(client) {
    console.log('Client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
    console.log('Message Received ', packet.payload.toString());
  });

server.on('clientDisconnected', function (client) {
    console.log('Client Disconnected     := ', client.id);
});
  // fired when the mqtt server is ready
  function setup() {
    console.log('Mosca MQTT server is up and running at ' + settings.port);
  }