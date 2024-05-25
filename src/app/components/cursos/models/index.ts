export interface ICurso {
  id: number;
  nombre: string;
  tutor: string | null | undefined;   
}


export interface ICreateCursoData {
  id: number;
  nombre: string;
  tutor: string | null | undefined;  
}
