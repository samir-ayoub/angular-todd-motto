import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../auth-form.interface';

@Component({
  selector: 'app-dynamic-auth-form',
  templateUrl: './dynamic-auth-form.component.html',
  styleUrls: ['./dynamic-auth-form.component.css']
})
export class DynamicAuthFormComponent implements OnInit {

  titleInjectedDinamically: string;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
