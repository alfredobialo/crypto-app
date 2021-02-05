import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BuyersModule} from './modules/buyingModule/BuyersModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMenuComponent} from './app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule, BuyersModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
