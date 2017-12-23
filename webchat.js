console.log("No users in chat room yet");//inital console message

var WebSocket = require("ws").Server;

var server = new WebSocket({port:8000});//websocket server
var connectionCount = 0;//how many clients connected

//websocket server handling

var clients = [];//stores the sockets of individual clients
var clientNames = [];//stores the username of the clients corresponding to their index in the clients array above
//connection established
server.on("connection", function(ws){
	clients[clients.length] = ws;

	//displaying current users
	connectionCount++;
	console.clear();
	console.log("Current Users is Chat Room: "+connectionCount+"\n (Ctrl+C to close the server)");

	//handling the message received
	ws.on("message", function(msg){
		if(msg.includes(":") != true){
			clientNames[clientNames.length] = msg;

			for(i=0;i<clients.length;i++){
				clients[i].send(msg+" joined");
			}
		}
		else{
			for(i=0;i<clients.length;i++){
				clients[i].send(msg);
			}			
		}
	});

	ws.on("close", function(){
		var usernameLeft = clientNames[clients.indexOf(ws)];

		clientNames.splice(clients.indexOf(ws), 1);//remove the username of closed connection
		clients.splice(clients.indexOf(ws), 1);//remove the closed connection from the client list

		for(i=0;i<clients.length;i++){
			clients[i].send(usernameLeft+" left");
		}

		connectionCount--;
		console.clear();
		console.log("Current Users is Chat Room: "+connectionCount+"\n (Ctrl+C to close the server)");
	});
});

