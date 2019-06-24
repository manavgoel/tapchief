import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[libHighlightYellowDirective]'
})
export class HighlightYellowDirective {

  constructor(el: ElementRef) {
  	el.nativeElement.style.backgroundColor = 'yellow';
  }

}
