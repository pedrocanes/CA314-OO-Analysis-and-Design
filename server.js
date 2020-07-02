var WebSocket = require("ws") 
    WebSocketServer = WebSocket.Server,
    express = require("express"),
    http = require("http"),
    app = express(),
    server = http.createServer(app)
var msg_counter = 0
let wss = new WebSocketServer({server: server})


app.get("/", function(req, res) {
	res.sendFile(__dirname + "/sample.html")
})

//js implementation to include format
String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

wss.on('connection', function(socket){

		socket.on('message', function(message){
			let msg = JSON.parse(message)
			console.log(msg.message)
			socket.send(JSON.stringify({counter:msg_counter, message:msg.message}))
			msg_counter++

			//BROADCAST
/*			wss.clients.forEach(function(client) {
			client.send(message)
			})*/
		})
})

server.listen(12000, () => console.log('\x1b[32m%s\x1b[0m', 'Server Started'))