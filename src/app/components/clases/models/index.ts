import { ICurso } from "../../cursos/models";

export interface IClase {
  id: number;
  name: string;
  date: Date;
  curso: ICurso | null;
}

export interface ICreateClaseData {  
  name: string;
  date: Date;
  curso: ICurso;
}
