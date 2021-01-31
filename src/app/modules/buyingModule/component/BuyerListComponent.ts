import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {BuyerService} from '../services/BuyerService';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'buyer-list-component',
  template: `<h1>Buyer List</h1>
  <div class="p-3">
    Select whom to buy from
    <p-dropdown [style]="{width: '300px'}" [(ngModel)]="selectedBuyer" [options]="buyers" optionLabel="name" dataKey="id"
                placeholder="Select a Buyer"></p-dropdown>
  </div>
  <div class="card p-shadow-1" *ngIf="selectedBuyer">
    <div class="card-header">
      <p class="lead">{{selectedBuyer?.name}}</p>
    </div>
    <div class="p-card-body">
      <div class="card-content">
        <div class="row">
          <div class="col-9">
            <p class="p-3">
              Buyer Id : {{selectedBuyer?.id}} <br>
              Balance: {{selectedBuyer?.accountBal | currency:'NGN'}} <br>
              Wallet Id: {{selectedBuyer?.walletId }} <br>
            </p></div>
          <div class="col-3">
            <img src="assets/{{selectedBuyer.profilePicture}}" style="display:inline-block;margin:10px 5px 0 0" width="68">
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="row" *ngIf="!loading ; else showLoading">
    <div class="col-12 col-sm-4 col-md-4 my-3 my-md-4" *ngFor="let b of buyers">
      <div class="card p-shadow-1 cursor-pointer" (dblclick)="selectedBuyer=b"
           [ngClass]="{'p-shadow-7 bg-primary text-white' : selectedBuyer?.id === b.id}">
        <div class="card-header">
          <p class="lead">{{b?.name}}</p>
        </div>
        <div class="p-card-body">
          <div class="card-content">
            <div class="row">
              <div class="col-9"><p class="p-3">
                Buyer Id : {{b?.id}} <br>
                Balance: {{b?.accountBal | currency:'NGN'}} <br>
                Wallet Id: {{b?.walletId }} <br>
              </p>
              </div>
              <div class="col-3">
                <img src="assets/{{b.profilePicture}}" style="display:inline-block; margin-top:15px; margin-right: 5px;" width="65">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <ng-template #showLoading>
    <loading-skeleton-component></loading-skeleton-component>
  </ng-template>


  <div class="row">
    <div class="col-md-5 col-sm-6 col-12">

    </div>
    <div class="col-12 my-4">
      <p-pickList [source]="list1" [target]="list2">
        <ng-template let-buyer pTemplate="item">
          <div>
            <img src="assets/{{buyer.profilePicture}}" style="display:inline-block;margin:2px 0 2px 2px" width="48">
            <div style="font-size:14px;float:right;margin:15px 5px 0 0"><span class="font-weight-bolder">{{buyer.name}}</span>
              Bal {{buyer.accountBal | currency:'NGN'}} -<span class="text-danger">Wallet {{buyer.walletId}}</span></div>
          </div>
        </ng-template>
      </p-pickList>
    </div>

  </div>
  <div class="row">
    <div class="col-12">
      <angular-features></angular-features>
    </div>
  </div>
  `,
  styles: [`
    .cursor-pointer {
      cursor: pointer;
      user-select: none;
    }
  `]
})

export class BuyerListComponent implements OnInit {
  buyers: any = [];
  buyers$!: Subscription;
  selectedBuyer: any;
  list1: any = [];
  list2: any = [];
  loading: boolean = false;

  constructor(primeConfig: PrimeNGConfig, private buyerService: BuyerService) {
    primeConfig.ripple = true;
  }

  ngOnInit() {
    this.loading = true;
    this.buyers$ = this.buyerService.getBuyers()
      .subscribe(x => {
          this.buyers = x;
          this.list1 = [...this.buyers];
        }, (error) => {
          console.log(error);
        }, () => {
          this.loading = false;
          console.log(this.loading);
        }
      );

  }

  ngOnDestroy() {
    this.buyers$.unsubscribe();
  }
}
