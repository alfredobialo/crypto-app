import {NgModule} from '@angular/core';

import {SellersListComponent} from './components/sellers-list.component';
import {SellingService} from './SellingService';
import {CryptoSharedModule} from '../../shared/crypto-shared-module';
import {SellerPageComponent} from './seller-page-component';
import {AddSellerComponent} from './components/add-seller.component';

@NgModule({
  imports: [CryptoSharedModule],
  exports: [],
  declarations: [SellersListComponent, SellerPageComponent, AddSellerComponent],
  providers: [{ provide : SellingService, useClass : SellingService}],
})
export class SellingModule {
}
