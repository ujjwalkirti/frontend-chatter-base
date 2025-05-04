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


interface Message{
    id: string;
    message: string;
    senderId: string;
    senderName: string;
    createdAt: string;
    updatedAt: string;
}
