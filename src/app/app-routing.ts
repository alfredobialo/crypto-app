import {Route} from '@angular/router';
import {AppComponent} from './app.component';
import {BuyerListComponent} from './modules/buyingModule/component/BuyerListComponent';
import {AngularFeaturesComponent} from './modules/buyingModule/component/advance-angular/angular-features.component';
import {HomeComponent} from './app-menu.component';

export const appBaseRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buyer',
    component: BuyerListComponent
  },
  {
    path: 'seller',
    component: AngularFeaturesComponent
  }, {
    path: 'setting',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
