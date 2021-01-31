import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';
import {MenuModule} from 'primeng/menu';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ListboxModule} from 'primeng/listbox';
import {SkeletonModule} from 'primeng/skeleton';
import {MultiSelectModule} from 'primeng/multiselect';
import {ChipModule} from 'primeng/chip';
import {InputNumberModule} from 'primeng/inputnumber';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {PickListModule} from 'primeng/picklist';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PaginatorModule} from 'primeng/paginator';
import {TreeModule} from 'primeng/tree';
import {ChartModule} from 'primeng/chart';
import {LoadingSkeletonComponent} from './components/loading-skeleton';
import {AsomSampleGridviewComponent} from './components/asom-sample-gridview-component';

const primeNgModules = [InputTextModule, InputTextareaModule, DialogModule, ContextMenuModule,ToastModule, PickListModule, TableModule, CheckboxModule,
  InputSwitchModule, PaginatorModule, TreeModule, ChartModule,
  MenuModule, DropdownModule, SelectButtonModule, ListboxModule, SkeletonModule, MultiSelectModule, ChipModule, InputTextareaModule, InputNumberModule]

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule, ... primeNgModules],
  exports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule, ...primeNgModules, LoadingSkeletonComponent, AsomSampleGridviewComponent],
  declarations: [LoadingSkeletonComponent, AsomSampleGridviewComponent],
  providers: [],
})
export class CryptoSharedModule {
}
