'use client';
import { jwtDecode } from "jwt-decode";
import React from "react";

type authContextType = {
    user: User | null;
}

const authContext = React.createContext<authContextType>({
    user: null
});

function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = React.useState<User | null>(null);

	React.useEffect(() => {
		const token = localStorage.getItem("chatter_base_token");
		if (token) {
			setUser(jwtDecode(token));
        }else{
            setUser(null);
        }
	}, []);

	return <authContext.Provider value={{ user }}>{children}</authContext.Provider>;
}

export { AuthProvider, authContext };
