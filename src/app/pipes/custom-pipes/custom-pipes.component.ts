import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  files = [];

  constructor() { }

  ngOnInit() {

    this.files = [
      {name: 'logo.svg', size: 212787, type: 'image/svg'},
      {name: 'banner.svg', size: 32347, type: 'image/jpg'},
      {name: 'background.svg', size: 232387, type: 'image/png'},
    ];

  }

}
