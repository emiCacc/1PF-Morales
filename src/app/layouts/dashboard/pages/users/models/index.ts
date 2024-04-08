export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: 'ADMIN'|'USER';
    createdAt: Date;
}