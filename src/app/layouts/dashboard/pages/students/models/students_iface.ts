export interface IStudents {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    house?: string;  
    createdAt: string;
}

export interface CreateStudentPayload {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    house?: string | null;  
    createdAt: Date | null;
}