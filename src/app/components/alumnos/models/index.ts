export type Gender = 'M' | 'F';
export type Perfil = 'Desarrollador' | 'IT' | 'Usuario final';

export interface IAlumno {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  perfil: string;
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
  perfil: string;
}
