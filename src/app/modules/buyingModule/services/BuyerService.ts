import {Injectable} from '@angular/core';
import {CryptoSharedModule} from '../../../shared/crypto-shared-module';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
@Injectable({
  providedIn : CryptoSharedModule
})
export class BuyerService {

  buyers: any = [
    {
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
     return of(this.buyers).pipe(map( (obj, index) => {
        obj.forEach((x : any) => x.reviews = [
          {
            id : 1,
            comment : "Reliable Buyer, he bought all my assets without any delay in payments",
            dateReviewed : new Date(),
            rating : 5.0,
            reviewer : {
              name:"James Mmadu",
              id: "j-mmadu",
              pictureUrl : "users/images/amarachi-o.png"
            }
          },
          {
            id : 2,
            comment : "Amazing Buyer of Crypto Currency",
            dateReviewed : new Date(),
            rating : 4.6,
            reviewer : {
              name:"Kelex Money",
              id: "ke-money",
              pictureUrl : "users/images/olivia-o.png"
            }
          },
        ] );
       return obj;
     }),delay(800));
  }
}
