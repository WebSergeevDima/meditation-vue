export interface Meditation {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    description: string;
    duration_min: number;
}


export interface MeditationsApiResponse {
    data: {
        meditations: Meditation[];
    };
    status: 'success' | 'error' | string;
}