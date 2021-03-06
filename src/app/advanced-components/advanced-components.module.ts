import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdvancedComponentsComponent } from './advanced-components.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { DynamicAuthFormComponent } from './dynamic-auth-form/dynamic-auth-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdvancedComponentsComponent
  ],
  declarations: [
    AdvancedComponentsComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    DynamicAuthFormComponent
  ],
  entryComponents: [
    AuthFormComponent,
    DynamicAuthFormComponent
  ]
})
export class AdvancedComponentsModule { }
