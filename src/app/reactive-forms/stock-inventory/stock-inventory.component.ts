import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { Product } from './../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  products: Product[] = [
    { id: 1, price: 2800, name: 'MacBook Pro' },
    { id: 2, price: 50, name: 'USB-C Adaptor' },
    { id: 3, price: 400, name: 'iPod' },
    { id: 4, price: 900, name: 'iPhone' },
    { id: 5, price: 290, name: 'iWatch' },
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('branch'),
      code: new FormControl('cde')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10}),
      this.createStock({ product_id: 3, quantity: 50}),
    ])
});

constructor() { }

ngOnInit() {
}

createStock(stock) {
  return new FormGroup({
    product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
    quantity: new FormControl(stock.quantity || 10)
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
