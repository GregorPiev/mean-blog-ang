import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json, charset=UTF-8' });

    return this.http.post('http://localhost/account/reg', user, { headers })
      .pipe(
        map(res => res.json())
      );
  }
}
