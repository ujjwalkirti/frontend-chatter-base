"use client";
import Navbar from "@/components/common/Navbar";
import { SocketProvider } from "@/contexts/SocketProvider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const { user } = useContext(authContext);
	// const router  = useRouter();

	// useEffect(() => {
	// 	if (!user) {
	// 		localStorage.setItem("lastUrl", window.location.href);
	// 		router.push("/login");
	// 	}
	// }, [user]);

	return (
		<section>
			<Navbar />
			<SocketProvider>{children}</SocketProvider>
		</section>
	);
}
