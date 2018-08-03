import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdvancedComponentsModule } from './advanced-components/advanced-components.module';
import { DirectivesModule } from './directives/directives.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AdvancedComponentsModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
