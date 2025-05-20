"use client";
import { useSocket } from "@/contexts/SocketProvider";
import { useEffect } from "react";
import IndividualMessageBox from "./IndividualMessageBox";

function MessagesContainer() {
	const { messages } = useSocket();

	useEffect(() => {
		// always scroll to latest message
		const messageContainer = document.getElementById("message-container");
		if (messageContainer) {
			messageContainer.scrollTop = messageContainer.scrollHeight;
		}

		return () => {
			// reset message container
			const messageContainer = document.getElementById("message-container");
			if (messageContainer) {
				messageContainer.scrollTop = 0;
			}
		};
	}, [messages]);

	return (
		<div id="message-container" className="flex flex-col p-2 gap-2 h-[calc(100vh-250px)] overflow-y-scroll">
			{messages.map((message, index) => {
				const isSenderCurrentUser = message.senderId === localStorage.getItem("senderId");
				return <IndividualMessageBox isSenderCurrentUser={isSenderCurrentUser} message={message} key={message.senderId + index.toString()} />;
			})}
		</div>
	);
}

export default MessagesContainer;
