import {Component, OnInit} from '@angular/core';

@Component({
  template: `<div class="d-flex justify-content-center align-items-center container h-100">
    <login-component></login-component>
  </div>`
})

export class LoginPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
