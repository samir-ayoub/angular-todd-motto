import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {

  @Input()
    parent: FormGroup;

  @Input()
    products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
