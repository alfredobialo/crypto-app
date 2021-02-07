import {Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';

@Component({
  selector: 'asom-sample-gridview-component',
  template: `
    <ng-container>

      <p class="lead">Sample GridView Component</p>
      <div class="row">
        <ng-container>
          <ng-container *ngIf="gridTemplate">
            <ng-container *ngFor="let item of dataSource; let index = index;">
              <ng-container [ngTemplateOutlet]="gridTemplate " [ngTemplateOutletContext]="{$implicit: item, index : index}">

              </ng-container>
            </ng-container>
        </ng-container>
          <table class="table" *ngIf="!gridTemplate">

            <tr class="tr" *ngFor="let item of dataSource; let index = index;">
              <td>
                <ng-container [ngTemplateOutlet]="gridTemplate || list" [ngTemplateOutletContext]="{$implicit: item, index : index}">

                </ng-container>
              </td>
            </tr>
          </table>
        </ng-container>
        <ng-template #list let-aItem let-index="index">
          {{index + 1}} <span>{{aItem | json}}</span>
        </ng-template>
      </div>
    </ng-container>


  `
})

export class AsomSampleGridviewComponent implements OnInit, OnChanges {
  @Input() dataSource: any[] = [];
  @Input() gridTemplate!: TemplateRef<any>;

  constructor() {
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    console.log('NgOnChanges Called on GridComponent dataSource');
    console.log(simpleChange, this.dataSource);
  }

  ngOnInit() {
  }
}
