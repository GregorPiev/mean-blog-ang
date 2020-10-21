import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      category: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(6)]],
      info: ['', [Validators.required, Validators.minLength(6)]],
      photo: ['']
    });
  }

  createPost(): void {
    console.log('Form:', this.postForm);
    console.log('Value:', this.postForm.value);
  }
}
