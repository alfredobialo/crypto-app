import {Component} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser"
import {ActivatedRoute, Data} from '@angular/router';

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
export class AppMenuComponent{
}

@Component({
  template:`
    <div class="p-3">
    <p class="lead">
      Home Component</p>
     <h1>Welcome</h1>

    </div>
    `
})
export class HomeComponent {
  constructor(private activateRoute : ActivatedRoute, private title : Title, private meta:Meta) {
  }

  ngOnInit(){
    alert("ngOnInit Called");
    this.activateRoute.data.subscribe(x => this.renderMetaData(x))
  }
  private renderMetaData(x : any) {
    console.log(x);
    this.title.setTitle(x.pageTitle);
    const extractedMeta :any[] = x.meta;
    extractedMeta.forEach( y => this.meta.addTag({name : y.name,content :y.content }))
  }

}
