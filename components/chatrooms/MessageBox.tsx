"use client";

import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useSocket } from "@/contexts/SocketProvider";
import { v4 as uuidv4 } from "uuid";

function MessageBox() {
	const [message, setMessage] = React.useState("");
	const { sendMessage } = useSocket();

	const createMessage = (senderId: string, senderName: string) => {
		sendMessage(JSON.stringify({ id: uuidv4(), message: message, senderId: senderId, senderName: senderName, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }));
	};

	const onkeydown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
            createMessage("1", "User");
			setMessage("");
		}
	};

	const onSubmit = () => {
        createMessage("1", "User");
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
