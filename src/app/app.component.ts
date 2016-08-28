import { Component, OnInit } from '@angular/core';
import { heroesComponent } from './heroes.component';
@Component({
  selector: 'app-root',
  template: `
        <h1>{{title}}</h1>
        <nav>
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title="Tour of Heroes"
}
