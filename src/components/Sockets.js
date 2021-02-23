import { useEffect } from 'react';
import { io } from "socket.io-client";
import eventBus from "../utils/EventBus";

function SocketConnection() {
	const ENDPOINT = "http://localhost:3000";
	useEffect(()=>{
		const socket = io(ENDPOINT);
		socket.on("connect",()=>alert("Connected"))
		socket.on("disconnect",()=>socket.connect())
	},[])
}

export default SocketConnection;