import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('branch'),
      code: new FormControl('cde')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit!', this.form.value);
  }

}
