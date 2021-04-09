import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
// NgRx Imports
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {BuyersModule} from './modules/buyingModule/BuyersModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMenuComponent} from './app-menu.component';
import {RouterModule} from '@angular/router';
import {appBaseRoutes} from './app-routing';
import {ReverseTextPipe} from './shared/pipes/ReverseTextPipe';
import {LowerCasePipe, UpperCasePipe} from '@angular/common';
import {AuthModule} from './shared/components/auth/auth-module';
import {SellingModule} from './modules/sellingModule/SellingModule';
import {counterReducer} from './modules/sellingModule/state/sellers.reducer';
import {HomeComponent} from './home.component';
import {CounterComponent, MyInterceptor} from './counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent, HomeComponent, ReverseTextPipe, CounterComponent
  ],
  imports: [

    BrowserModule, BuyersModule, SellingModule, AuthModule,
    ReactiveFormsModule, FormsModule, // TODO : Remove later, just for demo
    BrowserAnimationsModule, RouterModule.forRoot(appBaseRoutes),
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [UpperCasePipe, LowerCasePipe, ReverseTextPipe,
    {provide : HTTP_INTERCEPTORS, useClass : MyInterceptor, multi : true} ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
