import {ChangeDetectionStrategy, Component, OnInit, Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {decrementCounter, incrementCounter, resetCounter} from './modules/sellingModule/state/sellers.action';
import {IUserModel} from './shared/components/auth/i-current-user-context';
import {HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpClient} from '@angular/common/http';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-counter',
  template: `
    <div class="p-5">
      <h4>My Counter Demo with Ngrx</h4>
      <h1>Counter is : {{count$ | async}}</h1>
      <div class="my-4">
        <button (click)="increment()" class="btn btn-primary mr-4">Increment</button>
        <button (click)="decrement()" class="btn btn-primary mr-4">Decrment</button>
        <button (click)="reset()" class="btn btn-primary mr-4">Reset</button>
      </div>
    </div>
  `
})

export class CounterComponent implements OnInit {
  githubApiResponse: any;
  get myPermutationForm(): FormGroup {
    return this._myPermutationForm;
  }

  set myPermutationForm(value: FormGroup) {
    this._myPermutationForm = value;
  }

  myType : Partial<IUserModel> = {firstName : "Alfred"};
  count$!: Observable<number>;
  private _myPermutationForm! : FormGroup;
  constructor(private store: Store<{ counter: number }> ,
              private fb : FormBuilder, private httpClient : HttpClient) {

  }

  ngOnInit() {
    this.count$ = this.store.select('counter');
    this.httpClient.get("https://api.github.com")
      .subscribe(x => {
        this.githubApiResponse = x;
        console.log(this.githubApiResponse);
      })
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }

  reset() {
    this.store.dispatch(resetCounter());
  }
}

@Injectable()
export  class MyInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest  = req.clone();
    if(newRequest.method.toLowerCase() === "get")
    {
      // add a new Customer Header and possible auth token
      newRequest.headers.set("author", "Alfred Obialo");
      newRequest.headers.set("authorization", "Bearer acxhhdewsu67823whd232ew8ds29112-32");
    }
    console.log(newRequest);
    return next.handle(newRequest);
  }

}
