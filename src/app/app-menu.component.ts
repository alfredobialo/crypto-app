import {Component, OnInit} from "@angular/core";

@Component({
  selector : "app-menu",
  template :`<div class="my-5 app-menu">
    <a href="#">Home</a>
    <a href="#">Buyers</a>
    <a href="#">Sellers</a>
    <a href="#">Settings</a>
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

    div.app-menu a:hover {
      background-color: #e9e9f3;
      color: #125699;
    }
  `]
})
export class AppMenuComponent implements OnInit{

  ngOnInit() {
    // Initilization code goes here
  }
}
