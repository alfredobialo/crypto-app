import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BuyersModule} from './modules/buyingModule/BuyersModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMenuComponent, HomeComponent} from './app-menu.component';
import {RouterModule} from '@angular/router';
import {appBaseRoutes} from './app-routing';
import {AddSellerComponent} from './modules/sellingModule/components/add-seller.component';
import {ReverseTextPipe} from './shared/pipes/ReverseTextPipe';
import {LowerCasePipe, UpperCasePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent, HomeComponent, AddSellerComponent,ReverseTextPipe
  ],
  imports: [
    BrowserModule, BuyersModule, BrowserAnimationsModule, RouterModule.forRoot(appBaseRoutes)
  ],
  providers: [UpperCasePipe, LowerCasePipe, ReverseTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
