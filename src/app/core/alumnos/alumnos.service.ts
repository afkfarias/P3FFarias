import { Injectable } from '@angular/core';
import { IAlumno, ICreateAlumnoData } from '../../components/alumnos/models';
import { Observable, delay, of } from 'rxjs';

let ALUMNOS_DB: IAlumno[] = [
  {
    id: 1,
    firstName: 'Alexis',
    lastName: 'Ferreira',
    email: 'ffar@hotmail.com',
    gender: 'M',
    createdAt: new Date(),
    deletedAt: null,
  },
  {
    id: 2,
    firstName: 'Malena',
    lastName: 'Pérez',
    email: 'mpe@gmail.com',
    gender: 'F',
    createdAt: new Date(),
    deletedAt: null,
  },
  {
    id: 3,
    firstName: 'Agustin',
    lastName: 'Juárez',
    email: 'aj@gmail.com',
    gender: 'M',
    createdAt: new Date(),
    deletedAt: null,
  },
];

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  getAlumnos(): Observable<IAlumno[]> {
    return of(ALUMNOS_DB).pipe(delay(1500));
  }

  createAlumnos(data: ICreateAlumnoData) {
    if (data.firstName && data.lastName && data.email && data.gender) {
      const newAlumno: IAlumno = {
        id: new Date().getTime(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        gender: data.gender,
        createdAt: new Date(),
        deletedAt: null
      };
      ALUMNOS_DB.push(newAlumno);
    }
    return of(ALUMNOS_DB);
  }

  deleteAlumnos(id: number) {
    return of(ALUMNOS_DB.filter((alumno) => alumno.id != id));
  }

  updateAlumnos(id: number, data: IAlumno) {
    return of(
      ALUMNOS_DB.map((alumno) => (alumno.id === id ? { ...alumno, ...data } : alumno))
    );
  }
}
