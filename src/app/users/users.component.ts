import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterLink, RouterModule } from "@angular/router";
import { FormsModule,} from '@angular/forms';


@Component({
  selector: 'app-users',
  imports: [RouterModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private Api:ApiService){
  }


  AllUser :any[] = []
  Filtered: any[] = [];
  SearchText: string = "";

  GetAllUser(){
    this.Api.GetAll().subscribe((data:any) => {
      this.AllUser = data
      this.Filtered = data
    })
  }
ngOnInit(): void {
  this.GetAllUser();
}
  onSearch(): void {
    const search = this.SearchText.toLowerCase().trim();
    if (!search) {
      this.Filtered = this.AllUser;
      return;
    }
    this.Filtered = this.AllUser.filter((user) => {
      const [firstName, lastName] = user.name.toLowerCase().split(' ');
      return (
        firstName.includes(search) ||
        (lastName && lastName.includes(search)) ||
        user.email.toLowerCase().includes(search)
      );
    });
  }
  ClearSearch():void {
    this.SearchText = "";
    this.Filtered = this.AllUser;
  }
}
