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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json, charset=UTF-8' });

    return this.http.post<any>('http://localhost/account/reg', user, { headers })
      .pipe(
        map(res => res)
      );
  }
}
