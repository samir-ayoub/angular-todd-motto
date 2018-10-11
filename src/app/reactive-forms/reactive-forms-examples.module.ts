import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsComponent } from './reactive-forms.component';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './stock-branch/stock-branch.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';
import { StockProductsComponent } from './stock-products/stock-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsComponent
  ],
  declarations: [ReactiveFormsComponent, StockInventoryComponent, StockBranchComponent, StockSelectorComponent, StockProductsComponent],
})
export class ReactiveFormsExamplesModule { }
