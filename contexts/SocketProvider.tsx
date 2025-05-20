"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface ISocketContext {
  sendMessage: (msg: string) => void;
  messages: string[];
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`Socket context is undefined`);
  return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = useCallback((msg: string) => {
    if (socket) {
      socket.emit("message", {  message: msg }); // Make sure server listens to "message"
    }
  }, [socket]);

  const onMessageRec = useCallback((msg: string) => {
    setMessages((prev) => [...prev, JSON.parse(msg).message]);
  }, []);

  useEffect(() => {
    const _socket = io(process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000");

    _socket.on("message", onMessageRec); // Make sure server emits on "message"

    setSocket(_socket);

    return () => {
      _socket.off("message", onMessageRec);
      _socket.disconnect();
      setSocket(undefined);
    };
  }, [onMessageRec]);

  return (
    <SocketContext.Provider value={{ sendMessage, messages }}>
      {children}
    </SocketContext.Provider>
  );
};

