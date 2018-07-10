import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'app-advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.css']
})
export class AdvancedComponentsComponent implements AfterContentInit {

  rememberMe = false;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }


  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    component.instance.titleInjectedDinamically = 'Title with component factory';
  }

  createUser(user: User) {
    console.log('Create Account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

}
