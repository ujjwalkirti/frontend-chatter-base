import { SocketProvider } from "@/contexts/SocketProvider";
import { redirect } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = true;
    if(!user) redirect("/login");
    return (
        <html lang="en">
            <body className=''>
                <SocketProvider>{children}</SocketProvider>
            </body>
        </html>
    );
}
