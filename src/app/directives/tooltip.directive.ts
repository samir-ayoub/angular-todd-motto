import { element } from 'protractor';
import { Directive, Input, ElementRef, ViewContainerRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

  tooltipElement = document.createElement('div');
  visible = false;

@Input() set tooltip(value) {
  this.tooltipElement.textContent = value;
}

hide() {
  this.tooltipElement.classList.remove('tooltip--active');
}

show() {
  this.tooltipElement.classList.add('tooltip--active');
}

  constructor(
    private element: ElementRef,
    private view: ViewContainerRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.tooltipElement.className = 'input-tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');

  }

}
