import { Component, Output, EventEmitter, AfterContentInit, ContentChild, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { AuthMessageComponent } from './../auth-message/auth-message.component';
import { AuthRememberComponent } from './../auth-remember/auth-remember.component';
import { User } from '../auth-form.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild('email') email: ElementRef;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterContentInit() {

    if (this.message) {
      this.message.days = 30;
    }

    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
}

ngAfterViewInit() {
  this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email' );
  this.renderer.addClass(this.email.nativeElement, 'email');
  this.email.nativeElement.focus();


}

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
