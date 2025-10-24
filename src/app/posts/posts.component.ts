import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(public Api: ApiService) {}

  AllPost: any[] = [];
  selectedPost: any = null;

  ngOnInit(): void {
    this.GetAllPost();
  }

  GetAllPost() {
    forkJoin({
      posts: this.Api.GetAllPost(),
      users: this.Api.GetAll(),
    }).subscribe(({ posts, users }: any) => {
      this.AllPost = posts.map((post: any) => {
        const user = users.find((u: any) => u.id === post.userId);
        return {
          ...post,
          userName: user ? user.name : 'უცნობი ავტორი',
        };
      });
    });
  }

  ViewPost(post: any) {
    this.selectedPost = post;
    console.log(this.selectedPost.body);
  }

  CloseModal() {
    this.selectedPost = null;
  }
}