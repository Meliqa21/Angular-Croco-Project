import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
constructor(public Api:ApiService){}
AllPost:any[] = [];
selectedPost:any = null;

ngOnInit(): void {
  this.GetAllPost()
}

GetAllPost(){
  this.Api.GetAllPost().subscribe( (data:any) => (
    this.AllPost = data
  ))
}
ViewPost(post:any){
  this.selectedPost = post
  console.log(this.selectedPost.body)
}
CloseModal(){
  this.selectedPost = null;
}
}



