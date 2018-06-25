import { Component, OnInit } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'app-advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.css']
})
export class AdvancedComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createUser(user: User) {
    console.log('Create Account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
