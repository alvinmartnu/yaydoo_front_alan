export interface ModUser {
    idUser?: number;
    name?: string;
    email?: string;
    password?: string;
    info: Info;
}

export interface Info {
    idInfo?: number;
    address?: string;
    phone?: string;
    age?: string;
    bornDate?: Date;
}
