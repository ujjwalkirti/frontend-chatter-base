"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
	children?: React.ReactNode;
}

interface ISocketContext {
	sendMessage: (message: string, senderId: string, receiverId: string) => void;
	messages: Message[];
	joinRooms: (userId: string, groupIds: string[]) => void;
	leaveRooms: (userId: string, groupIds: string[]) => void;
	isConnected: boolean;
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const useSocket = () => {
	const state = useContext(SocketContext);
	if (!state) throw new Error(`Socket context is undefined`);
	return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
	const [socket, setSocket] = useState<Socket>();
	const [messages, setMessages] = useState<Message[]>([]);
	const [isConnected, setIsConnected] = useState(false); // NEW

	const userId = localStorage.getItem("senderId");

	const sendMessage = useCallback(
		(message: string, senderId: string, receiverId: string) => {
			if (socket) {
				socket.emit("message", JSON.stringify({ message, senderId, receiverId }));
			}
		},
		[socket]
	);

	const joinRooms = useCallback(
		(userId: string, groupIds: string[]) => {
			if (socket) {
				socket.emit("join-rooms", { userId, groupIds });
			}
		},
		[socket]
	);

	const leaveRooms = useCallback(
		(userId: string, groupIds: string[]) => {
			if (socket) {
				socket.emit("leave-rooms", { userId, groupIds });
			}
		},
		[socket]
	);

	const onMessageRec = useCallback((payload: Message) => {
		setMessages((prev) => [...prev, payload]);
	}, []);

	useEffect(() => {
		const _socket = io(process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000");

		_socket.on("connect", () => {
			_socket.emit("register", { userId });
			setIsConnected(true); // NEW
		});

		_socket.on("message", onMessageRec);

		setSocket(_socket);

		return () => {
			_socket.off("message", onMessageRec);
			_socket.disconnect();
			setSocket(undefined);
			setIsConnected(false); // NEW
		};
	}, [onMessageRec, userId]);

	return <SocketContext.Provider value={{ sendMessage, messages, joinRooms, leaveRooms, isConnected }}>{children}</SocketContext.Provider>;
};
