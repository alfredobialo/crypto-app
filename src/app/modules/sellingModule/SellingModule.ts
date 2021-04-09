import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {SellersListComponent} from './components/sellers-list.component';
import {SellingService} from './SellingService';
import {CryptoSharedModule} from '../../shared/crypto-shared-module';
import {SellerPageComponent} from './seller-page-component';
import {AddSellerComponent} from './components/add-seller.component';
/*import {counterReducer} from "./state/sellers.reducer";*/

@NgModule({
  imports: [CryptoSharedModule
   /* , StoreModule.forFeature("counter" , {myCounter : counterReducer})*/
  ],
  exports: [],
  declarations: [SellersListComponent, SellerPageComponent, AddSellerComponent],
  providers: [{ provide : SellingService, useClass : SellingService}],
})
export class SellingModule {
}
