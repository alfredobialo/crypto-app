import {Component, OnInit} from "@angular/core";

@Component({
  selector : "app-menu",
  template :`<div class="my-5 app-menu">
    <a routerLink="/home" routerLinkActive="active-menu">Home</a>
    <a routerLink="/buyer" routerLinkActive="active-menu">Buyers</a>
    <a routerLink="/seller" routerLinkActive="active-menu">Sellers</a>
    <a routerLink="/setting" routerLinkActive="active-menu">Settings</a>
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
export class AppMenuComponent implements OnInit{

  ngOnInit() {
    // Initilization code goes here
  }
}

@Component({
  template:`
    <div class="p-3">
    <p class="lead">
      Home Component
    </p>
    </div>
    `
})
export class HomeComponent{}
