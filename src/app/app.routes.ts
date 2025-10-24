import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserIdPostComponent } from './user-id-post/user-id-post.component';
import { UserTodosComponent } from './user-todos/user-todos.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { WheelComponent } from './wheel/wheel.component';
import { LeadboardComponent } from './leadboard/leadboard.component';
import { PathErrorComponent } from './path-error/path-error.component';

export const routes: Routes = [
    {path:"",component:UsersComponent},
    {path:"Posts",component:PostsComponent},
    {path:"Posts/:name/:Id",component:UserIdPostComponent},
    {path:"Todo/:name/:Id",component:UserTodosComponent},
    {path:"Promo",component:PromotionsComponent,children:[
        {path:"",redirectTo:"wheel",pathMatch:"full"},
        {path:"wheel",component:WheelComponent},
        {path:"leadboard",component:LeadboardComponent}
    ]},
    {path:"**",component:PathErrorComponent}
];
