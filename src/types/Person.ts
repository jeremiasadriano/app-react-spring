export interface IPerson {
  id?: number;
  name: string;
  email: string;
  password: string;
  age: string;
}

export interface IPersonLogin {
  email: string;
  password: string;
}

export interface IPersonResponse {
  token: string;
}
