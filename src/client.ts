import WebSocket from "ws";
import * as readline from "readline";

// Create a new WebSocket client
const ws = new WebSocket("ws://localhost:8080");

// Interface to receive messages from the server
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: "> ",
});

ws.on("open", () => {
	console.log("Connected to server!");
	rl.prompt();
});

ws.on("message", data => {
	console.log(`\n[Message Received]: ${data}`);
	rl.prompt();
});

rl.on("line", line => {
	ws.send(line);
	console.log(`[Message Sent]: ${line}`);
	rl.prompt();
});

ws.on("close", () => {
	console.log("Connection Closed!");
	rl.close();
});
