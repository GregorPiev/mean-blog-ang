import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';

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
  past$: Observable<any>;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {



  }

  initializing(): void {
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
