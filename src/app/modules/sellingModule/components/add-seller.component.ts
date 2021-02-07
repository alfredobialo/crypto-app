import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'add-seller-component',
  template: `

    <div class="p-3 my-3">
      <div class="row my-2">
        <div class="col-12 col-sm-3">First Name</div>
        <div class="col-12 col-sm-9"><input type="text" class="form-control-lg form-control"></div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-3">Last Name</div>
        <div class="col-12 col-sm-9"><input type="text" class="form-control-lg form-control"></div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-3">Account Bal /Wallet/ ID</div>
        <div class="col-12 col-sm-9">
          <div class="row">
          <div class="col-5"><input type="number" class="form-control-lg form-control" placeholder="Account Bal"></div>
          <div class="col-4"><input type="text" class="form-control-lg form-control" placeholder="Wallet Id"></div>
          <div class="col-3"><input type="text" class="form-control-lg form-control" placeholder="Id"></div>
          </div>



        </div>
      </div>
      <div class="row mt-3">
        <div class="col-9 col-3">
          <button class="btn btn-outline-primary btn-lg">Add Seller</button>
        </div>
      </div>
      <hr>
      <div class="p-3">
        <table class="table table-borderless">
          <tr>
            <th style="width:40%;">Name</th>
            <th style="width:20%;">Account Bal</th>
            <th style="width:10%;">Id</th>
            <th style="width:15%;">Wallet Id</th>
            <th>

            </th>
          </tr>
          <tr *ngFor="let user of userDb">
            <td style="width:40%;">{{user.firstName | reverse:'uppercase'}} {{user.lastName}}</td>
            <td style="width:20%;">{{user.accountBal | currency:'NGN'}}</td>
            <td style="width:10%;">{{user.id}}</td>
            <td style="width:15%;">{{user.walletId}}</td>
            <td>
              <button class="btn btn-danger" (click)="removeUser(user)">Remove</button>
            </td>
          </tr>
        </table>

        <div>
          <button class="btn btn-danger" [disabled]="userDb.length === 0" (click)="clearAll()">Remove All</button>
          <button class="btn btn-danger" *ngIf="isCleared" (click)="undoClearAll()">Undo Remove All</button>
        </div>
      </div>

    </div>

  `
})

export class AddSellerComponent implements OnInit {

  userDb = [
    {
      firstName: 'Chinaza',
      lastName: 'Onuoha',
      id: '001',
      accountBal: 30000,
      walletId: 'WAT001-2021'
    },
    {
      firstName: 'Alfred',
      lastName: 'Obialo',
      id: '002',
      accountBal: 20000,
      walletId: 'WAT002-2021'
    },
    {
      firstName: 'Davido',
      lastName: 'Adeleke',
      id: '003',
      accountBal: 300000000,
      walletId: 'WAT003-2021'
    },
  ];
 private userUndoStack :any[] = [];
 isCleared: boolean  = false;
  constructor() {
  }

  ngOnInit() {
  }


  removeUser(user :any) {
    if(confirm(`Are you sure you want to remove ${user.firstName} record` )){
      // remove record
      const index  = this.userDb.indexOf(user);
      if(index > -1){
        this.userDb.splice(index,1);
        // notify user
        // User a notification service for this delegation
      }
    }
  }
  clearAll(){
    if(confirm(`Are you sure you want clear all records` )) {

      this.userUndoStack = [...this.userDb];
      this.isCleared = true;
      this.userDb = [];
    }
  }
  undoClearAll(){
    if(this.isCleared){
      this.userDb = [...this.userUndoStack];
      this.userUndoStack = [];
      this.isCleared  =false;
    }
  }
}
