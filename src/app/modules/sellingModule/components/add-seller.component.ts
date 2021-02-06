import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'add-seller-component',
  template: `

      <div class="row">
      <div class="col-12 col-sm-3">First Name</div>
      <div class="col-12 col-sm-9"><input type="text" class="form-control-lg"></div>
      </div><div class="row">
      <div class="col-12 col-sm-3">Last Name</div>
      <div class="col-12 col-sm-9"><input type="text" class="form-control-lg"></div>
      </div>

  `
})

export class AddSellerComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
