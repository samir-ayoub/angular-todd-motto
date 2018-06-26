import { AuthMessageComponent } from './../auth-message/auth-message.component';
import { AuthRememberComponent } from './../auth-remember/auth-remember.component';
import { Component, Output, EventEmitter, AfterContentInit, ContentChild, AfterViewInit, ViewChild } from '@angular/core';

import { User } from '../auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngAfterContentInit() {

    // if (this.message) {
    //   this.message.days = 30;
    // }

    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
}

ngAfterViewInit() {
  console.log(this.message.days);
  this.message.days = 30;
  console.log(this.message.days);


}

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
