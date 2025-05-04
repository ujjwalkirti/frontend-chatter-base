import CreateChatRoom from "@/components/landing-page/CreateChatRoom";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-col gap-4 w-full mx-auto px-3 lg:w-3/5 h-screen items-center justify-center text-lg">
			<p className="text-3xl font-bold">Welcome, User</p>
			<p className="">100+ chat rooms active now. Wanna join one?</p>
			<div className="flex flex-col gap-4">
				<Link href="/chatrooms/available" className="mx-auto">
					<Button className="w-[100px] mx-auto cursor-pointer">Join Here</Button>
				</Link>
				<CreateChatRoom />
			</div>
		</div>
	);
}
