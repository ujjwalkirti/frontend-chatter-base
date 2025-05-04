import MessagesContainer from "@/components/chatrooms/MessagesContainer";
import React from "react";

function Page() {
	return <div className="flex flex-col gap-4 h-screen w-full lg:w-3/5 mx-auto px-3">
		<MessagesContainer/>

	</div>;
}

export default Page;
