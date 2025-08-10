export interface UserRegistration {
    username: string;
    email: string;
    password: string;
}

export interface LoginResponse {
    data: UserData
    message: string
    status: string
}


export interface UserLogin {
    username: string;
    password: string;
}

export interface User {
    email: string
    id: number
    username: string
}
export interface RegistrationResponse {
    data: User
    message: string
    status: string
}

export interface UserData {
    token: string
    user: User
}

export interface UserProfile {
    email: string;
    id: number;
    last_login_at: string; // ISO дата-время с часовым поясом
    username: string;
}

export interface UserProfileResponse {
    data: {
        user: User;
    };
    status: 'success' | 'error';
}
