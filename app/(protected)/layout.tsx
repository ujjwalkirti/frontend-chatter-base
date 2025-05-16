'use client';
import Navbar from "@/components/common/Navbar";
import { authContext } from "@/contexts/AuthProvider";
import { SocketProvider } from "@/contexts/SocketProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { user } = useContext(authContext);
	const router  = useRouter();

	useEffect(() => {
		if (!user) {
			localStorage.setItem("lastUrl", window.location.href);
			router.push("/login");
		}
	}, [user]);

	return (
		<html lang="en">
			<body className="">
				<Navbar />
				<SocketProvider>{children}</SocketProvider>
			</body>
		</html>
	);
}
