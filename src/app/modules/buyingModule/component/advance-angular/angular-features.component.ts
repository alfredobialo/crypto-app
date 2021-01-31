import {Component, OnInit, VERSION, TemplateRef,ElementRef,ViewChild, AfterViewInit} from '@angular/core';
import {BuyerService} from '../../services/BuyerService';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'angular-features',
  templateUrl: 'angular-features.component.html'
})

export class AngularFeaturesComponent implements OnInit, AfterViewInit {
  version: string = VERSION.major;
  showSearchUi = true;
  @ViewChild('txtSearch', {static: false}) searchInputRef!: ElementRef;
  buyer$! : Observable<any>;
  loading: boolean = false;
  buyers: any[] = [];

  buyersOptions = {}

  constructor( private buyerService : BuyerService) {
  }

  ngOnInit() {
    this.buyersOptions = {
      selectedBuyer : { name : 'James Smith', accountBal : 93200, walletId : "3271889WF", id:"0321"}
    }
    this.loading = true;
    this.buyer$  = this.buyerService.getBuyers();
    this.buyer$.subscribe(x => {
      this.buyers = x;
    }, (error => {}), () => {
      this.loading = false;
    })
  }

  ngAfterViewInit(): void {
    console.log(this.searchInputRef.nativeElement);
    const elem  = this.searchInputRef as ElementRef;
    elem.nativeElement.value = 'Dynamically Assigned!';
  }
}
