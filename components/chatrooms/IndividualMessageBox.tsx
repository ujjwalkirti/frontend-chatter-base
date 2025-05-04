import React, { useState } from "react";

interface IndividualMessageBoxProps {
	message: string;
	isSenderCurrentUser: boolean;
}

function IndividualMessageBox({ message, isSenderCurrentUser }: IndividualMessageBoxProps) {
	const [showMessageDetails, setShowMessageDetails] = useState<boolean>(false);
	return (
		<div onClick={() => setShowMessageDetails(!showMessageDetails)} className={`break-words border border-md rounded-t-lg ${isSenderCurrentUser ? "rounded-bl-lg max-w-4/5 self-end bg-accent" : "rounded-br-lg"} p-2`}>
			<p className={`break-words`}>{JSON.parse(message).message}</p>
		</div>
	);
}

export default IndividualMessageBox;
