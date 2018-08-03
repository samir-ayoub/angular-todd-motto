import { element } from 'protractor';
import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[credit-card]'
})
export class CreditCardDirective {

  constructor(private element: ElementRef) { }

  @HostBinding('style.border')
  border: string;

  @HostListener('input', ['$event'])
  onkeydown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');

      if (trimmed.length > 16) {
        trimmed = trimmed.substr(0, 16);
      }

      let numbers = [];
      for(let i = 0; i < trimmed.length; i += 4) {
        numbers.push(trimmed.substr(i, 4));
      }

      input.value = numbers.join(' ');

      this.border = '';
      if (!/[ˆ\d]+/.test(trimmed)) {
        this.border = '1px solid red';
      }


    console.log(numbers);
  }
}
