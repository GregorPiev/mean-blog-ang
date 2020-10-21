import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts = [];
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
      })
  }

}
