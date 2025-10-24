import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(public http : HttpClient) {}

  LoaderLogic : BehaviorSubject<boolean> = new BehaviorSubject(false);
  private loaderStartTime: number | null = null;

  
  GetAll(){
    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
  }
  GetPostByUser(Id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${Id}`)
  }
  GetAllPost(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
  }
  GetToDo(Id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`)
  }

startLoader() {
    this.loaderStartTime = Date.now();
    this.LoaderLogic.next(true);
  }

  stopLoader() {
    const now = Date.now();
    const elapsed = now - (this.loaderStartTime ?? now);

    const remaining = Math.max(200, 300 - elapsed);

    setTimeout(() => {
      this.LoaderLogic.next(false);
      this.loaderStartTime = null;
    }, remaining);
  }

}
