var mosca = require('mosca');
var settings = {
    port : 1888,
    // http: {
    //   port: 1888,
    //   bundle: true,
    //   static: './'
    // }
		}

var server = new mosca.Server(settings);
// var mosca = require("mosca");
// var server = new mosca.Server({
//   http: {
//     port: 1888,
    //bundle: true,
    // static: './'
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