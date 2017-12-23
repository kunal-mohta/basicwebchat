var ip = prompt("Enter your ip");

//establish websocket connection
var ws = new WebSocket("ws://"+ip.toString()+":8000");

//get the username
var userName;
ws.onopen = function(){
	userName = prompt("Enter your name: ");

	ws.send(userName);

	document.getElementsByClassName("msgInput")[0].focus();
}

//handling the sending of message
function sendMsg(){
	var msg = document.getElementsByClassName("msgInput")[0].value;

	ws.send(userName + ": "+msg);

	document.getElementsByClassName("msgInput")[0].value = "";
}

ws.onmessage = function(msg){
	if(msg.data.includes(":") != true){
		var userJoin = document.createElement("p");
		userJoin.innerHTML = msg.data;
		userJoin.style.textAlign = "center";

		document.getElementsByClassName("msgDisplay")[0].appendChild(userJoin);
	}

	else{
		var msgFrom = msg.data.split(":")[0];
		var msgContent = msg.data.split(":")[1];

		//receiveing your own message
		if(msgFrom == userName){
			var msgui = document.createElement("div");
			msgui.className = "me-msgui";

			var clientName = document.createElement("div");
			clientName.className = "me-clientName";
			clientName.innerHTML = msgFrom;

			var msgc = document.createElement("div");
			msgc.className = "me-msgContent";
			msgc.innerHTML = msgContent;

			msgui.appendChild(clientName);
			msgui.appendChild(msgc);

			document.getElementsByClassName("msgDisplay")[0].appendChild(msgui);
			
			msgui.style.height = (clientName.getBoundingClientRect().height + msgc.getBoundingClientRect().height)+"px";
			
		}

		//receiving message from other users
		else{
			var msgui = document.createElement("div");
			msgui.className = "o-msgui";

			var clientName = document.createElement("div");
			clientName.className = "o-clientName";
			clientName.innerHTML = msgFrom;

			var msgc = document.createElement("div");
			msgc.className = "o-msgContent";
			msgc.innerHTML = msgContent;

			msgui.appendChild(clientName);
			msgui.appendChild(msgc);

			document.getElementsByClassName("msgDisplay")[0].appendChild(msgui);
			
			msgui.style.height = (clientName.getBoundingClientRect().height + msgc.getBoundingClientRect().height)+"px";
		}	
	}
}

window.onunload = function(){
	ws.close();
}

window.onbeforeunload = function(){
	ws.close();
}