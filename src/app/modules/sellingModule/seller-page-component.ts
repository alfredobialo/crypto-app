import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'seller-page-component',
  template: `
    <h1>Seller's Page</h1>
    <div class="row">
      <div class="col-7">
        <seller-list>

        </seller-list>
      </div>
      <div class="col-5">
        <add-seller-component>

        </add-seller-component>
      </div>
    </div>

  `
})

export class SellerPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
