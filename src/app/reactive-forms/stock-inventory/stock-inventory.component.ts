import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Product, Item } from './../models/product.interface';
import { StockInventoryService } from '../services/stock-inventory.service';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  products: Product[];

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
});

constructor(
  private fb: FormBuilder,
  private stockService: StockInventoryService
  ) { }

ngOnInit() {
  const cart = this.stockService.getCartItems();
  const products = this.stockService.getProducts();

  Observable
    .forkJoin(cart, products)
    .subscribe(data => console.log(data));
}

createStock(stock) {
  return this.fb.group({
    product_id: parseInt(stock.product_id, 10) || '',
    quantity: stock.quantity || 10
  });
}

addStock(stock) {
  const control = this.form.get('stock') as FormArray;
  control.push(this.createStock(stock));
}

removeStock( { group, index }: {group: FormGroup, index: number}) {
  const control = this.form.get('stock') as FormArray;
  control.removeAt(index);
}

onSubmit() {
  console.log('Submit!', this.form.value);
}

}
