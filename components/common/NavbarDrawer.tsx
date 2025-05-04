import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustifyIcon, MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

function NavbarDrawer() {
	const navLinks = [
		{ label: "Chatrooms", href: "/chatrooms/available" },
		{ label: "Profile", href: "/profile" },
	];
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="md:hidden">
					<AlignJustifyIcon />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col gap-2 h-full items-start justify-center px-5">
					{navLinks.map((link) => {
						return (
							<Link href={link.href} key={link.href} className="flex items-center gap-2 text-lg hover:cursor-pointer hover:underline hover:scale-105 transition-all duration-300 mx-auto">
								{link.label} <MoveUpRightIcon />
							</Link>
						);
					})}
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default NavbarDrawer;
