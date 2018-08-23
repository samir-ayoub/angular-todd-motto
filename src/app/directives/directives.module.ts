import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DirectivesComponent } from './directives.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesComponent
  ],
  declarations: [CreditCardComponent, DirectivesComponent, CreditCardDirective, TooltipDirective]
})
export class DirectivesModule { }
