type ChatRoomType = 'private' | 'group' | 'anonymous';

interface ChatRoom {
    id: string;
    name?: string;
    type: ChatRoomType;
    createdAt: string;
    updatedAt: string;
    lastMessageContent?: string;
    participantCount?: number;
}


interface Message {
    senderId: string;
    message: string;
}

interface User {
    id: string;
    username: string;
    dob: string;
    gender: string;
    ip_address: string;
    createdAt: string;
    updatedAt: string;
}
