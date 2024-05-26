import { Injectable } from '@angular/core';
import { IAlumno, ICreateAlumnoData } from '../../components/alumnos/models';
import { Observable, delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private httpClient: HttpClient) { }

  getAlumnos(): Observable<IAlumno[]> {
    return this.httpClient.get<IAlumno[]>(environment.baseAPIURL + '/students')
  }

  getAlumnoById(id: string): Observable<IAlumno | undefined> {
    return this.httpClient.get<IAlumno>(`${environment.baseAPIURL}/students/${id}`);
  }

  createAlumnos(data: ICreateAlumnoData) {
    return this.httpClient.post<IAlumno>(
      `${environment.baseAPIURL}/students`,
      data
    );
  }

  deleteAlumnos(id: string) {
    return this.httpClient.delete<IAlumno>(
      environment.baseAPIURL + '/students/' + id
    );
  }

  updateAlumnos(id: string, data: IAlumno) {
    return this.httpClient.put<IAlumno>(
      environment.baseAPIURL + '/students/' + id,
      data
    );
  }
}
