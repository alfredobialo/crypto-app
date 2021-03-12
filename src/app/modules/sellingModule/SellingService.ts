import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class SellingService {

  constructor() {
  }
  getSellers() : Observable<any[]>{
  return of([ {
    id:"john-doe",
    name:"John Doe",
    interest : [{
      type : 'btc',
      maxValue : 3,
      description : "Bitcoin"
    }]
  },
    {
      id:"pumkin",
      name:"Maryann Okafor O.",
      interest : [{
        type : 'btc',
        maxValue : 2,
        description : "Bitcoin"
      },
        {
          type : 'eth',
          maxValue : 6,
          description : "Etherum"
        }
      ]
    },
  ]).pipe(delay(3000));
}

}
