export interface ICurso {
  id: string;
  nombre: string;
  cantHs: number;
  cantClases: number;
  tutor: string | null | undefined;   
}


export interface ICreateCursoData {
  nombre: string;
  cantHs: number;
  cantClases: number;
  tutor: string | null | undefined;  
}
