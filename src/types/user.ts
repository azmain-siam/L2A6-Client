export interface IUser {
  id: string;
  email: string;
  name: string;
  role: string;
  phone?: string;
  exp?: number;
  iat?: number;
}

export interface ILoggedInUser {
  _id: string;
  email: string;
  name: string;
  role: string;
  phone: string;
}
