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


