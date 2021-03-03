import {NgModule} from '@angular/core';

import {LoginComponent} from './login-component';
import {CryptoSharedModule} from '../../crypto-shared-module';
import {LoginPageComponent} from './login-page.component';


@NgModule({
  imports: [CryptoSharedModule],
  exports: [],
  declarations: [LoginComponent, LoginPageComponent],
  providers: [],
})
export class AuthModule {
}
