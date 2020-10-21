import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './../service/auth.service';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';

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
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
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
  deletePost(id) {
    this.auth.deletePost(id).subscribe(res => {
      if (!res.success) {
        this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });
      } else {
        this.flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 3000 });
      }
    })
  }

}
