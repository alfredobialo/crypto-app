import {Route} from '@angular/router';
import {BuyerListComponent} from './modules/buyingModule/component/BuyerListComponent';
import {AngularFeaturesComponent} from './modules/buyingModule/component/advance-angular/angular-features.component';
import {AuthGuardService} from './shared/components/auth/auth-guard';
import {LoginPageComponent} from './shared/components/auth/login-page.component';
import {SellerPageComponent} from './modules/sellingModule/seller-page-component';
import {HomeComponent} from './home.component';

export const appBaseRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      meta: [
        {
          name: 'keywords',
          content: 'Building Financial Freedom with Cryptocurrency, Buy / Sell Bitcoin, Etherum, etc'
        },
        {
          name: 'description',
          content: 'We Buy and Sell Bitcoin, Etherum, we also Help invest in Cryptocurrency.'
        }],
      pageTitle: "Welcome- Buy and Sell Cryptocurrency on our platform"
    }
  },
  {
    path: 'buyer',
    component: BuyerListComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: 'seller',
    component: SellerPageComponent,
    canActivate: [AuthGuardService]
  }, {
    path: 'setting',
    component: AngularFeaturesComponent
  },
  {
    path :"login",
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
