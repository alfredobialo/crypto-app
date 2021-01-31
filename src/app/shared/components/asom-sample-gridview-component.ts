import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'asom-sample-gridview-component',
  template: `
    <ng-container>

      <p class="lead">Sample GridView Component</p>
      <div class="row">
        <div class="col-12">
          <table class="table">
            <tr class="tr" *ngFor="let d of dataSource; let index = index;">
              <td>
                <ng-container [ngTemplateOutlet]="list" [ngTemplateOutletContext]="{$implicit: d, index : index}">
                  <ng-content>

                  </ng-content>

                </ng-container>
              </td>
            </tr>
          </table>
        </div>
        <ng-template #list let-aItem let-index="index">
          {{index + 1}} <span>{{aItem | json}}</span>
        </ng-template>
      </div>
    </ng-container>


  `
})

export class AsomSampleGridviewComponent implements OnInit, OnChanges {
  @Input() dataSource: any[] = [];

  constructor() {
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    console.log('NgOnChanges Called on GridComponent dataSource');
    console.log(simpleChange, this.dataSource);
  }

  ngOnInit() {
  }
}
