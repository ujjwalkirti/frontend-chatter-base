"use client";

import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useSocket } from "@/contexts/SocketProvider";
import { v4 as uuidv4 } from "uuid";

interface MessageBoxProps {
	receiverId: string;
}

function MessageBox({ receiverId }: MessageBoxProps) {
	const [message, setMessage] = React.useState("");
	const [senderId, setSenderId] = React.useState(localStorage.getItem("senderId") || uuidv4());
	const { sendMessage } = useSocket();

	const createMessage = (senderId: string, receiverId: string) => {
		sendMessage(
			JSON.stringify({
				message: message,
				senderId: senderId,
				receiverId: receiverId,
			})
		);
	};

	const onkeydown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			createMessage(senderId, receiverId);
			setMessage("");
		}
	};

	const onSubmit = () => {
		createMessage(senderId, receiverId);
		setMessage("");
	};

	return (
		<div className="h-[180px] flex flex-col border border-md rounded-md p-2 gap-2">
			<Textarea value={message} onKeyDown={onkeydown} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." className="resize-none border-none h-full" />
			<Button onClick={onSubmit} type="button">
				Send
			</Button>
		</div>
	);
}

export default MessageBox;
