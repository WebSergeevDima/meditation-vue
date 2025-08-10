export interface StatUpdateProps {
    type: string,
    value: number
}

export interface Stat {
    id: number;
    created_at: string;
    updated_at: string;
    user_id: number;
    date: string;
    duration_min: number;
    feeling_calm: number;
    feeling_relax: number;
    feeling_focus: number;
    feeling_anxiety: number;
}

export interface StatResponse {
    data: {
        stat: Stat;
    };
    message: string;
    status: 'success' | 'error';
}