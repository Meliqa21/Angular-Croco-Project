import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-id-post',
  imports: [RouterModule],
  templateUrl: './user-id-post.component.html',
  styleUrl: './user-id-post.component.css'
})
export class UserIdPostComponent {
constructor(public actR : ActivatedRoute,public Api : ApiService){
  this.getUserPosts();
}
  public userName! : string;
  public Posts:any[] = [];

  getUserPosts(){
    this.actR.params.subscribe((data:any) => {
      this.userName = data.name
      this.Api.GetPostByUser(data.Id).subscribe( (data:any) => {
        this.Posts = data
        console.log(this.Posts)
      })
    })
  }
}
