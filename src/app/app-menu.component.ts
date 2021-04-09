import {Component} from '@angular/core';
import {AuthenticatedUserContextService} from './shared/components/auth/i-current-user-context';

@Component({
  selector : "app-menu",
  template :`<div class="my-5 app-menu">
    <a routerLink="/home" routerLinkActive="active-menu">Home</a>
    <a routerLink="/buyer" routerLinkActive="active-menu">Buyers</a>
    <a routerLink="/seller" routerLinkActive="active-menu">Sellers</a>
    <a routerLink="/setting" routerLinkActive="active-menu">Settings</a>
    <div  *ngIf="authContext.isAuthenticated()">
      <span class="text-white">{{authContext.getCurrentUser()?.firstName}}</span>
      <span><button class="btn btn-link">Sign Out</button></span>
    </div>
  </div>`,
  styles : [`
    div.app-menu {
      background-color: #125699;
      color: white;
      font-size: 1.2rem;
      box-shadow: 1px 0 10px #333333;
    }

    div.app-menu a {
      text-decoration: none;
      display: inline-block;
      color: white;
      padding: 1.2rem 2rem;
      transition: all linear 0.4s
    }

    div.app-menu a:hover,a.active-menu {
      background-color: #e9e9f3;
      color: #125699 !important;
    }
  `]
})
export class AppMenuComponent{
  constructor(public authContext : AuthenticatedUserContextService) {
  }
}


