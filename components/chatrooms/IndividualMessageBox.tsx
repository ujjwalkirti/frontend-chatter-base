import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IndividualMessageBoxProps {
	message: Message;
	isSenderCurrentUser: boolean;
}

function IndividualMessageBox({ message, isSenderCurrentUser }: IndividualMessageBoxProps) {
	const [showMessageDetails, setShowMessageDetails] = useState<boolean>(false);
	return (
		<div className={`flex items-end gap-2  ${isSenderCurrentUser ? " max-w-4/5 self-end flex-row-reverse" : " max-w-4/5 self-start "}`}>
			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div onClick={() => setShowMessageDetails(!showMessageDetails)} className={`break-words border border-md rounded-t-lg   ${isSenderCurrentUser ? "bg-accent rounded-bl-lg" : "rounded-br-lg"} p-2`}>
				<p className={`break-words`}>{message.message}</p>
			</div>
		</div>
	);
}

export default IndividualMessageBox;
