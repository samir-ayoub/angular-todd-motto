import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { StockInventoryService } from '../services/stock-inventory.service';

import { Product, Item } from './../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  products: Product[];
  productMap: Map<number, Product>;
  total: number;

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', Validators.required],
      code: ['', Validators.required]
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
  .subscribe(([cart, products]: [Item[], Product[]])  => {

    const myMap = products
      .map<[number, Product]>(product => [product.id, product]);

      this.productMap = new Map<number, Product>(myMap);
      this.products = products;

      cart.forEach(item => this.addStock(item));

      this.calculateTotal(this.form.get('stock').value);

      this.form.get('stock')
        .valueChanges.subscribe(value => this.calculateTotal(value));
    });
}

calculateTotal(value: Item[]) {
  const total = value.reduce((prev, next) => {
    return prev + (next.quantity * this.productMap.get(next.product_id).price);
  }, 0);
  this.total = total;
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
  // console.log('Submit!', this.form.value);
}

}
