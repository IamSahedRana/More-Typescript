type userRole = 'Admin' | 'User' | "Moderator"| "Guest";

interface User {
    username: string;
    email: string;
    role: userRole;
    isActive?: boolean;
}

interface Admin extends User {
     permissions: string[];
}
interface Moderator extends User {
    sections: string[];
}
interface Guest extends User {
    // Guest-specific properties can be added here if needed
}    

const adminUser: Admin = {
    username: 'admin123',
    email: 'admin123@example.com',
    role: 'Admin',
    permissions: ['read', 'write', 'delete']
};