import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'am-table-view',
  templateUrl: 'asom-table-view.html'
})

export class AsomTableViewComponent implements OnInit {
  @Input() columnTemplate!: TemplateRef<any>;
  @Input() rowTemplate!: TemplateRef<any>;
  @Input() dataSource: any[] = [];
  constructor() {
  }

  ngOnInit() {

  }
}
