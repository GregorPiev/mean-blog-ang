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
        this.posts = posts,
          (err) => { console.log('Error:', err) },
          () => {
            for (let i = 0; i < posts.length; i++) {
              this.posts[i].info = this.posts[i].info.substring(0, 250);
            }
          }
      });
  }

}
