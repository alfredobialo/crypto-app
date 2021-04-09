import {NgModule} from '@angular/core' ;
import {StoreModule} from '@ngrx/store';

import {BuyerListComponent} from './component/BuyerListComponent';
import {CryptoSharedModule} from '../../shared/crypto-shared-module';
import {AngularFeaturesModule} from './component/advance-angular/angular-feature-module';
import {AsomTableViewComponent} from './component/advance-angular/asom-tableView-Component';

@NgModule({
  declarations :[BuyerListComponent,AsomTableViewComponent],
  imports: [
    CryptoSharedModule, AngularFeaturesModule, StoreModule.forFeature("buyers", {})
  ],
  exports: [
    BuyerListComponent
  ]
}) export class BuyersModule{

}
