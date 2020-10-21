import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  user: any;
  httpOptions: {};
  private tokenSubject: BehaviorSubject<string>;
  public currentToken: Observable<string>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<string>(localStorage.getItem('token'));
    this.currentToken = this.tokenSubject.asObservable();

    this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type'
        }
      )
    };

  }
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
    this.tokenSubject.next(this.token);
  }

  logout(): void {
    this.token = null;
    this.user = null;
    localStorage.clear();
    this.tokenSubject.next(this.token);
  }

  createPost(post): Observable<any> {
    const option = this.httpOptions;
    console.log('option 1:', option['headers']);
    option['headers'].append('Authorization', localStorage.getItem('token'));
    console.log('option 2:', option);
    return this.http.post<any>('http://localhost:3000/account/post', post, this.httpOptions)
      .pipe(
        map(res => res)
      );
  }
  updatePost(post: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/account/post', post, this.httpOptions)
      .pipe(
        map(res => res)
      );
  }

  getAllPosts(): Observable<any> {
    return this.http.get<any>('http://localhost:3000')
      .pipe(
        map(res => res)
      );
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/post/${id}`)
      .pipe(
        map(res => res)
      );
  }

  deletePost(id): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/post/${id}`)
      .pipe(
        map(res => res)
      );
  }
}
