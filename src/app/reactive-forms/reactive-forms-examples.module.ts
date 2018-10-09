import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsComponent } from './reactive-forms.component';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsComponent
  ],
  declarations: [ReactiveFormsComponent, StockInventoryComponent],
})
export class ReactiveFormsExamplesModule { }
