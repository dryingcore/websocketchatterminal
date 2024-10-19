import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", ws => {
	console.log("New Client Connected!");

	ws.on("message", message => {
		console.log(`Message Received: ${message}`);

		wss.clients.forEach(client => {
			client.send(message);
		});
	});

	ws.on("close", () => {
		console.log("Client Disconnected!");
	});
});

console.log("Server Started!");