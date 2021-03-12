import {Component, OnInit} from '@angular/core';
import {SellingService} from '../SellingService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'seller-list',
  template: `
    <div class="jumbotron">
      <h1>List Of Sellers</h1>
      <span class="text-muted">Select a seller to see more details</span>
    </div>
    <div>
      <div class="p-0">
        <ng-container *ngIf="!loading; else loadingTemplate;">
          <table class="table table-borderless">
            <tr>
              <th style="width:30%;">Name</th>
              <th style="">Interest</th>
              <th>
              </th>
            </tr>
            <tr *ngFor="let s of sellers">
              <td style="">{{s?.name}}</td>
              <td style="">
                <p class="mb-2">{{s?.interest?.length}} interest</p>
                <table class="table">
                  <tr>
                    <td>Currency Type</td> <td>Max Selling Value</td>
                  </tr>
                  <tr *ngFor="let i of s.interest; let index = index;">
                    <td>
                      {{i.description}} ({{i.type}})
                    </td>
                    <td>
                      {{i.maxValue | number}}
                    </td>
                  </tr>
                </table></td>
              <td>
                <button class="btn btn-outline-primary">Details</button>
              </td>
            </tr>
          </table>
        </ng-container>


      </div>
    </div>

    <ng-template #loadingTemplate> <loading-skeleton-component type="list">

    </loading-skeleton-component></ng-template>
  `
})

export class SellersListComponent implements OnInit {
  sellers: any[] =  [];
  private subscription$! : Subscription;
  loading: boolean = false;
  constructor(private sellerService : SellingService) {
  }

  ngOnInit() {
    this.getSellers();
  }

  getSellers(){
    this.loading =true;
    this.subscription$ = this.sellerService.getSellers().subscribe(x =>{
      this.sellers  = x;
    }, (err )=> console.log(err), () => this.loading = false);
  }
}
