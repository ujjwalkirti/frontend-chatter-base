import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: { username: {}, dob: {}, gender: {}, ip_address: {} },
            async authorize(credentials, req) {
                const response = await fetch(
                    `${process.env.API_URL}/api/auth/register`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ ...credentials }),
                    }
                )

                const res = await response.json();
                console.log("response from server:",res);
                if (res.success) return res.user;
                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST }
