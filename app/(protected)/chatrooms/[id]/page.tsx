import MessageBox from "@/components/chatrooms/MessageBox";
import MessagesContainer from "@/components/chatrooms/MessagesContainer";

async function Page() {
	return (
		<div className="flex flex-col gap-4 w-full lg:w-3/5 mx-auto px-3">
			<MessagesContainer />
			<MessageBox/>
		</div>
	);
}

export default Page;
