export interface IUser {
  id: string;
  email: string;
  name: string;
  role: string;
  exp?: number;
  iat?: number;
}
