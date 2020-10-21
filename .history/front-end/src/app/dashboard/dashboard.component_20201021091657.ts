import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
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
    this.auth.createPost(post).
      subscribe(data => {
        console.log('Result:', data);
        if (!data.success) {
          this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        } else {
          this.postForm.reset();
          this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3200);
        }
      });
  }
}
