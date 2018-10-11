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
    {id: 1, price: 2800, name: 'MacBook Pro'},
    {id: 2, price: 50, name: 'USB-C Adaptor'},
    {id: 3, price: 400, name: 'iPod'},
    {id: 4, price: 900, name: 'iPhone'},
    {id: 5, price: 290, name: 'iWatch'},
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('branch'),
      code: new FormControl('cde')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit!', this.form.value);
  }

}
