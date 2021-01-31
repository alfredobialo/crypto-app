import {Injectable} from '@angular/core';
import {CryptoSharedModule} from '../../../shared/crypto-shared-module';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn : CryptoSharedModule
})
export class BuyerService {

  buyers: any = [{
    name: 'Alfred Obialo',
    accountBal: 21000,
    walletId: '002WE589',
    id: 'alfred-o',
    profilePicture: 'users/images/alfred-o.jpg'
  },
    {
      name: 'Olivia Obialo',
      accountBal: 12355,
      walletId: '0045WE89',
      id: 'olivia-o',
      profilePicture: 'users/images/olivia-o.png'
    },
    {
      name: 'Chizaram Obialo',
      accountBal: 349901,
      walletId: '300WEF62',
      id: 'chizaram-o',
      profilePicture: 'users/images/chizaram-o.png'
    }, {
      name: 'Amarachi Obialo',
      accountBal: 542213,
      walletId: '358WEF45',
      id: 'amarachi-o',
      profilePicture: 'users/images/amarachi-o.png'
    }, {
      name: 'Somkene Obialo',
      accountBal: 780087,
      walletId: '432WEF62',
      id: 'maryann-o',
      profilePicture: 'users/images/maryann-o.png'
    },

  ];
  constructor() {
  }
  getBuyers() : Observable<any[]>
  {
     return of(this.buyers).pipe(delay(4200));
  }
}
