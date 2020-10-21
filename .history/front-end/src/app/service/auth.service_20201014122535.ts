import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return of('1');
  }
}
