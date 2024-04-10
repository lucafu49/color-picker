import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}`).pipe()
  }

  private handleError(error: any) {
    console.error('Error en el servidor:', error);
    throw error;
  }
}
