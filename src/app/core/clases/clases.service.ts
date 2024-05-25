import { Injectable } from '@angular/core';
import { IClase, ICreateClaseData } from '../../components/clases/models';
import { Observable, delay, of } from 'rxjs';

let CLASES_DB: IClase[] = [
  {
    id: 1,
    name: 'Introducción a Angular',
    date: new Date(),
    curso: null
  },
  {
    id: 2,
    name: 'Java',
    date: new Date(),
    curso: null
  },
  {
    id: 3,
    name: 'Python',
    date: new Date(),
    curso: null
  },
];

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor() { }

  getClases(): Observable<IClase[]> {
    return of(CLASES_DB).pipe(delay(1500));
  }

  createClase(data: ICreateClaseData) {
    if (data.name && data.date && data.curso) {
      const newClase: IClase = {
        id: new Date().getTime(),
        name: data.name,
        date: data.date,
        curso: data.curso
      };
      CLASES_DB.push(newClase);
    }
    return of(CLASES_DB);
  }

  deleteClase(id: number) {
    return of(CLASES_DB.filter((clase) => clase.id != id));
  }

  updateClase(id: number, data: IClase) {
    return of(
      CLASES_DB.map((clase) => (clase.id === id ? { ...clase, ...data } : clase))
    );
  }
}
