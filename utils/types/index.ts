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
