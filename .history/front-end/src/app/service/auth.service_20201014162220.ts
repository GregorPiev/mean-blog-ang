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
    console.log('Front Service user: ', user);
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json, charset=UTF-8')
      .set('Access-Control-Allow-Origin', '*');


    return this.http.post<any>('http://localhost:3000/account/reg', user)
      .pipe(
        map(res => res)
      );
  }
}
