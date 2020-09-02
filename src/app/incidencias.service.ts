import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IIncidencias } from './incidenciasInterface';
import { Observable, throwError } from 'rxjs';
import { throwError as ObservableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IncidenciasService {
  constructor(private http: HttpClient) {}
  url: string = 'assets/data/incidencias.json';

  /*url: string =
    'http://2.139.147.209:1603/api/listadoesficherosgarum/2020-08-31 00:00:00/2020-08-31 23:59:00';*/

  getIncidencias(): Observable<IIncidencias[]> {
    return this.http
      .get<IIncidencias[]>(this.url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message);
  }

  /* getIncidencias() {
    return [
      { id: 1, estacion: 'es1', incidencias: 11 },
      { id: 2, estacion: 'es2', incidencias: 12 },
      { id: 3, estacion: 'es3', incidencias: 13 },
      { id: 4, estacion: 'es4', incidencias: 14 },
      { id: 5, estacion: 'es5', incidencias: 15 },
    ];
  }*/
}
