import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-todos',
  imports: [RouterLink],
  templateUrl: './user-todos.component.html',
  styleUrl: './user-todos.component.css'
})
export class UserTodosComponent implements OnInit {
constructor(public actR : ActivatedRoute,public Api : ApiService){}
  public userName! : string;
  public Todo:any[] = [];
ngOnInit(): void {
    this.getUserTodos();
}
  getUserTodos(){
    this.actR.params.subscribe((data:any) => {
      this.userName = data.name
      this.Api.GetToDo(data.Id).subscribe( (data:any) => {
        this.Todo = data
      })
    })
  }
}

