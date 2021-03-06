import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit, ComponentRef, TemplateRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';
import { DynamicAuthFormComponent } from './dynamic-auth-form/dynamic-auth-form.component';
import { User } from './auth-form.interface';

@Component({
  selector: 'app-advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.css']
})
export class AdvancedComponentsComponent implements AfterContentInit {

  ctx = {
    $implicit: 'Samiro',
    location: 'SP - BR'
  };

  component: ComponentRef<DynamicAuthFormComponent>;
  rememberMe = false;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('entryDynamicTemp', { read: ViewContainerRef }) entryDynamicTemp: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }


  ngAfterContentInit() {
    // const authFormFactory = this.resolver.resolveComponentFactory(DynamicAuthFormComponent);
    // this.entry.createComponent(authFormFactory);
    // this.component = this.entry.createComponent(authFormFactory, 0);
    // this.component.instance.titleInjectedDinamically = 'Title with component factory';
    // this.component.instance.submitted.subscribe(this.loginUser);

    // dynamic temp
    this.entryDynamicTemp.createEmbeddedView(this.tmpl, {
      $implicit: 'Samir Ayoub',
      location: 'Sao Paulo, BR'
    });
  }

  createUser(user: User) {
    // console.log('Create Account', user);
  }


  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    // console.log('Login', user, this.rememberMe);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

}
