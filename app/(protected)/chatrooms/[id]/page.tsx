"use client";
import MessageBox from "@/components/chatrooms/MessageBox";
import MessagesContainer from "@/components/chatrooms/MessagesContainer";
import { useSocket } from "@/contexts/SocketProvider";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function Page() {
	const { id } = useParams();
	const { joinRooms, isConnected } = useSocket();

	useEffect(() => {
		if (isConnected && id) {
			const senderId = localStorage.getItem("senderId") as string;
			joinRooms(senderId, [id as string]);
		}
	}, [id, isConnected]);

	return (
		<div className="flex flex-col gap-4 w-full lg:w-3/5 mx-auto px-3">
			<MessagesContainer />
			<MessageBox receiverId={id as string} />
		</div>
	);
}

export default Page;
