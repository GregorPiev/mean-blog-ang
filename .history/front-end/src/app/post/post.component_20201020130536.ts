import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$: Observable<any>;
  login: string;
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.login = user ? JSON.parse(user).login : '';
    console.log('Author:', this.login)
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.auth.getPostById(params['id']);
      }));
  }

}
