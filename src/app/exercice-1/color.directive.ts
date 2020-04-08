import {Directive, HostListener, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective {
  @HostBinding('style.color') color: string;
  constructor(private el: ElementRef) {}

  @HostListener('window:keyup', ['$event']) windowKeyUp($event) {
    switch ($event.key) {
      case 'ArrowUp':
        this.color = 'red';
        break;
      case 'ArrowDown':
        this.color = 'blue';
        break;
      case 'ArrowRight':
        this.color = 'orange';
        break;
      case 'ArrowLeft':
        this.color = 'pink';
        break;
    }
  }
}
