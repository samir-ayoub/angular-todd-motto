import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './../filesize.pipe';

interface File {
  name: string;
  size: any;
  type: string;
}

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css'],
  providers: [ FileSizePipe ]
})
export class CustomPipesComponent implements OnInit {

  files = [];
  mapped: File[];

  constructor(private fileSizePipe: FileSizePipe) { }

  ngOnInit() {

    this.files = [
      {name: 'logo.svg', size: 212787, type: 'image/svg'},
      {name: 'banner.svg', size: 32347, type: 'image/jpg'},
      {name: 'background.svg', size: 232387, type: 'image/png'},
    ];

    this.mapped =  this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb')
      };
    });

  }

}
