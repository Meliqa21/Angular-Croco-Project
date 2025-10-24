import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavBarComponent,RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  CurrentTime:Date = new Date();
  private time : any;

  ngOnInit():void {
    this.time = setInterval(() => {
      this.CurrentTime = new Date();
    }, 1000);
  }
}
