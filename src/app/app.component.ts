import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ScrollTopDirective } from './scroll-top.directive';
import { LoaderComponent } from './loader/loader.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ScrollTopDirective,
    LoaderComponent
  ],
  template: `
    <div appScrollTop class="page-wrapper">
      <app-header></app-header>

      @if (loading) {
        <app-loader></app-loader>
      }

      <main class="content">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Crocobet Angular Project"
  loading = false;

  constructor(public Api: ApiService) {
    this.Loader();
  }

  Loader() {
    this.Api.LoaderLogic.subscribe((data: boolean) => {
      this.loading = data;
    });
  }
}