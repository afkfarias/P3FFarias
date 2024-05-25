export type Gender = 'M' | 'F';

export interface IAlumno {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  deletedAt: Date | null;
  gender: Gender;  
}

export interface ICreateAlumnoData {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  gender: Gender;  
}
