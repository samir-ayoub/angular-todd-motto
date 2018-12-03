import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReactiveFormsComponent } from './reactive-forms.component';
import { StockBranchComponent } from './stock-branch/stock-branch.component';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';
import { StockInventoryService } from './services/stock-inventory.service';
import { StockProductsComponent } from './stock-products/stock-products.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';
import { StockCounterComponent } from './stock-counter/stock-counter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsComponent
  ],
  declarations: [ReactiveFormsComponent, StockInventoryComponent, StockBranchComponent, StockSelectorComponent, StockProductsComponent, StockCounterComponent],
  providers: [StockInventoryService]
})
export class ReactiveFormsExamplesModule { }
