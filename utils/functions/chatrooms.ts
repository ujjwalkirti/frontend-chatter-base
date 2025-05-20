'use server';

async function getAllChatRooms(): Promise<ChatRoom[]> {
    return [
        { id: '1ewwqesad', name: 'Chat Room 1', type: 'group', participantCount: 10, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '2sdasdasd', name: 'Chat Room 2', type: 'group', participantCount: 60, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '3dsadas', name: 'Chat Room 3', type: 'group', participantCount: 20, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '4sdasdsa', name: 'Chat Room 4', type: 'group', participantCount: 30, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '5dsada', name: 'Chat Room 5', type: 'group', participantCount: 40, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '6asdas', name: 'Chat Room 6', type: 'group', participantCount: 50,  createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '7asdas', name: 'Chat Room 7', type: 'group', participantCount: 60, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '8sadas', name: 'Chat Room 8', type: 'group', participantCount: 70, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '9fdsf', name: 'Chat Room 9', type: 'group', participantCount: 80, createdAt: '2023-01-01', updatedAt: '2023-01-01' },
        { id: '1sdfsdf0', name: 'Chat Room 10', type: 'group', createdAt: '2023-01-01', updatedAt: '2023-01-01' },
    ];
}

export {
    getAllChatRooms
}
