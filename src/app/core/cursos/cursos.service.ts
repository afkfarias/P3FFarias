import { Injectable } from '@angular/core';
import { ICreateCursoData, ICurso } from '../../components/cursos/models';
import { Observable, delay, of } from 'rxjs';

let CURSOS_DB: ICurso[] = [
  {
    id: 1,
    nombre: 'Angular',
    tutor: 'Felipe Suárez'
  },
  {
    id: 2,
    nombre: 'Java',
    tutor: 'Felipe Suárez'
  },
  {
    id: 3,
    nombre: 'Python',
    tutor: 'Felipe Suárez'
  },
];

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): Observable<ICurso[]> {
    return of(CURSOS_DB).pipe(delay(1500));
  }

  createCurso(data: ICreateCursoData) {
    if (data.nombre && data.tutor) {
      const newCurso: ICurso = {
        id: new Date().getTime(),
        nombre: data.nombre,
        tutor: data.tutor
      };
      CURSOS_DB.push(newCurso);
    }
    return of(CURSOS_DB);
  }

  deleteCurso(id: number) {
    return of(CURSOS_DB.filter((curso) => curso.id != id));
  }

  updateCurso(id: number, data: ICurso) {
    return of(
      CURSOS_DB.map((curso) => (curso.id === id ? { ...curso, ...data } : curso))
    );
  }
}
