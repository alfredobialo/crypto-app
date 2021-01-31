import {NgModule} from '@angular/core';

import {AngularFeaturesComponent} from './angular-features.component';
import {CryptoSharedModule} from '../../../../shared/crypto-shared-module';

@NgModule({
  imports: [CryptoSharedModule],
  exports: [
    AngularFeaturesComponent
  ],
  declarations: [AngularFeaturesComponent],
  providers: [],
})
export class AngularFeaturesModule {
}
