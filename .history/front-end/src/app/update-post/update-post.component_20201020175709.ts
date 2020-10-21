import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  post$: Observable<any>;
  post;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        console.log(params['id'])
        return this.auth.getPostById(params['id']);
      }));

    this.post$.subscribe(res => {
      this.post = res;
      this.initializing();
    });
  }

  initializing(): void {
    console.log('Post', this.post);
    this.postForm = this.fb.group({
      category: [this.post.category, [Validators.required]],
      title: [this.post.title, [Validators.required, Validators.minLength(6)]],
      info: [this.post.info, [Validators.required, Validators.minLength(16)]],
      photo: [this.post.photo, [Validators.required]]
    });
  }

  updatePost(): void {
    const post = { ...this.postForm.value };
    post.author = JSON.parse(localStorage.getItem('user')).login;
    post.date = new Date();
    post._id = this.post._id;
    this.auth.updatePost(post).
      subscribe(res => {
        if (!res.success) {
          this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 3000 });

        } else {
          this.postForm.reset();
          this.flashMessagesService.show(res.msg, { cssClass: 'alert-success', timeout: 3000 });
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3200);
        }
      });
  }

}
