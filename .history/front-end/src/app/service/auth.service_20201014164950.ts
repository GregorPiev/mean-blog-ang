import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json, charset=UTF-8');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    headers = headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, content-type');

    const httpOptions = {
      headers: headers
    }
    return this.http.post<any>('http://localhost:3000/account/reg', user, httpOptions)
      .pipe(
        map(res => res)
      );
  }
}
