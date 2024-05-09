export interface Person {
    id?: number,
    name: string,
    email: string,
    password: string,
    age: string
}

export interface PersonLogin {
    email: string,
    password: string
}