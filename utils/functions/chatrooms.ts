'use server';

async function getAllChatRooms(): Promise<ChatRoom[]> {
    return [
        { id: '1', name: 'Chat Room 1', type: 'group', participantCount: 10, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '2', name: 'Chat Room 2', type: 'group', participantCount: 60, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '3', name: 'Chat Room 3', type: 'group', participantCount: 20, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '4', name: 'Chat Room 4', type: 'group', participantCount: 30, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '5', name: 'Chat Room 5', type: 'group', participantCount: 40, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '6', name: 'Chat Room 6', type: 'group', participantCount: 50,  createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '7', name: 'Chat Room 7', type: 'group', participantCount: 60, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '8', name: 'Chat Room 8', type: 'group', participantCount: 70, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '9', name: 'Chat Room 9', type: 'group', participantCount: 80, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '10', name: 'Chat Room 10', type: 'group', createdAt: '2023-01-01', updatedAt: '2023-01-01' },
    ];
}


export {
    getAllChatRooms
}
