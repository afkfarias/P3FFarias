import { Injectable } from '@angular/core';
import { ICreateCursoData, ICurso } from '../../components/cursos/models';
import { Observable, delay, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  getCursos(): Observable<ICurso[]> {
    return this.httpClient.get<ICurso[]>(environment.baseAPIURL + '/courses')
  }

  getCursoById(id: string): Observable<ICurso | undefined> {
    return this.httpClient.get<ICurso>(`${environment.baseAPIURL}/courses/${id}`);
  }

  createCurso(data: ICreateCursoData) {
    return this.httpClient.post<ICurso>(
      `${environment.baseAPIURL}/courses`,
      data
    );
  }

  deleteCurso(id: string) {
    return this.httpClient.delete<ICurso>(
      environment.baseAPIURL + '/courses/' + id
    );
  }

  updateCurso(id: string, data: ICurso) {
    return this.httpClient.put<ICurso>(
      environment.baseAPIURL + '/courses/' + id,
      data
    );
  }
}
