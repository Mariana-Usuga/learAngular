import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{//iniciar session

    let body = {
      email: email,
      password: password
    }

    //Devolvemos la respuesta del observable cuando la peticion http se ha completado, el cpm
    //suscrito accedera al token de login
    return this.http.post('https://reqres.in/api/login', body)
  }
}
