import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdvancedComponentsModule } from './advanced-components/advanced-components.module';
import { DirectivesModule } from './directives/directives.module';
import { AppComponent } from './app.component';
import { ReactiveFormsExamplesModule } from './reactive-forms/reactive-forms-examples.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdvancedComponentsModule,
    DirectivesModule,
    PipesModule,
    ReactiveFormsExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
