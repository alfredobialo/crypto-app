import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BuyersModule} from './modules/buyingModule/BuyersModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMenuComponent, HomeComponent} from './app-menu.component';
import {RouterModule} from '@angular/router';
import {appBaseRoutes} from './app-routing';
import {ReverseTextPipe} from './shared/pipes/ReverseTextPipe';
import {LowerCasePipe, UpperCasePipe} from '@angular/common';
import {AuthModule} from './shared/components/auth/auth-module';
import {SellingModule} from './modules/sellingModule/SellingModule';

@NgModule({
    declarations: [
        AppComponent,
        AppMenuComponent, HomeComponent, ReverseTextPipe
    ],
    imports: [
        BrowserModule, BuyersModule,SellingModule, AuthModule, BrowserAnimationsModule, RouterModule.forRoot(appBaseRoutes)
    ],
    providers: [UpperCasePipe, LowerCasePipe, ReverseTextPipe],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
