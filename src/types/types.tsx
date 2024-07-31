export interface IUSer{
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    startDate: Date;
    email?: string | null;
    subordinates?: IUSer[] | null;
}