export interface LoginData {
  email: string | null;
  password: string | null;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: Date;
}
