export interface Participant {
    code: number | null;
    externalCode: number | null;
    name: string;
    cpf: string;
    phone: string | null;
    assign: boolean;
    status: boolean; 
}
