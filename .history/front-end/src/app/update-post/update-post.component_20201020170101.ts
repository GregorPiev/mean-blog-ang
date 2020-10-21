import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  postForm: FormGroup;
  optionCategory = [
    'World',
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
  ];
  createPostMessage = '';
  post$: Observable<any>;
  post;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        console.log(params['id'])
        return this.auth.getPostById(params['id']);
      }));

    this.post$.subscribe(res => {
      this.post = res;
    });


    this.initializing();
  }

  initializing(): void {
    console.log('Post', this.post);
    this.postForm = this.fb.group({
      category: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(6)]],
      info: ['', [Validators.required, Validators.minLength(16)]],
      photo: ['', [Validators.required]]
    });
  }

  createPost(): void {
    const post = { ...this.postForm.value };
    post.author = JSON.parse(localStorage.getItem('user')).login;
    post.date = new Date();

    console.log('post:', post);
    this.postForm.reset();
    this.auth.createPost(post).
      subscribe(data => {
        console.log('Result:', data);
        this.createPostMessage = data.msg;
        setTimeout(() => {
          this.createPostMessage = '';
          if (data.success) {
            this.router.navigate(['/']);
          }
        }, 3000);
      });
  }

}
