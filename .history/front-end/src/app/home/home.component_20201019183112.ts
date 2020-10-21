import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts = [];
  Greeting = 'Welcome!';
  About = 'This blog publishes news from the world of technology, business, travel, culture, fashion, health. Join us, register now and write your first posts';
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.getAllPosts()
      .subscribe(
        posts => this.posts = posts,
        (err) => { },
        () => {
          for (let i = 0; i < this.posts.length; i++) {
            this.posts[i].info = this.posts[i].info.substring(0, 250);
          }
        }
      )
  }

}
