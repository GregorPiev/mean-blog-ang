import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
