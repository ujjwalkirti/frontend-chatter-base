import { SocketProvider } from "@/contexts/SocketProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession();

    if(!session) return redirect("/login");

    return (
        <html lang="en">
            <body className=''>
                <SocketProvider>{children}</SocketProvider>
            </body>
        </html>
    );
}
