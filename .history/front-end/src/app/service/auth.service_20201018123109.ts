import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  user: any;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type'

      }
    )
  };

  registerUser(user): Observable<any> {
    return this.http.post<any>('http://localhost:3000/account/reg', user, this.httpOptions)
      .pipe(
        map(res => res)
      );
  }
  authUser(user): Observable<any> {
    return this.http.post<any>('http://localhost:3000/account/auth', user, this.httpOptions)
      .pipe(
        map(res => res)
      );
  }
  storeUser(token: string, user: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  logout(): void {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return true;//tokenNotExpired();
  }
}
