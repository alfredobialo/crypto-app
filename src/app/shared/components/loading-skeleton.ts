import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'loading-skeleton-component',
  template: `
    <div class="row my-3" *ngIf="type==='card'; else tabularSkeleton">
      <div class="col-12 col-sm-4 col-md-4 my-3 my-md-4" *ngFor="let b of [1,2,3,4,5,6]">
        <div class="card p-3" >
          <div class="">
            <p-skeleton width='100%' styleClass="my-3 p-1"></p-skeleton>
          </div>
          <div class="p-card-body">
            <div class="card-content">
              <div class="row">
                <div class="col-9 ">

                  <p-skeleton styleClass="mb-2" width="55%" height="1.4rem"></p-skeleton>
                  <p-skeleton styleClass="mb-2" width="90%" height="1.4rem"></p-skeleton>
                  <p-skeleton styleClass="mb-2" width="85%" height="1.4rem"></p-skeleton>

                </div>
                <div class="col-3">
                  <p-skeleton shape="circle" size="4rem" styleClass="mr-2">
                  </p-skeleton>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <ng-template #tabularSkeleton>
      <table class="table">
        <tr *ngFor="let b of [ 0,1,2,4,5,6]">
          <td><p-skeleton width="20px" height="1.3rem"></p-skeleton></td>
          <td class="w-50"><p-skeleton width="94%"></p-skeleton></td>
          <td class="w-25"><p-skeleton width="100%"></p-skeleton></td>
          <td class="w-25"><p-skeleton width="100%"></p-skeleton></td>
        </tr>
      </table>
    </ng-template>
  `
})

export class LoadingSkeletonComponent implements OnInit {
  @Input() type : 'card' | 'list' = 'card'
  constructor() {
  }

  ngOnInit() {
  }
}
