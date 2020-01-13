import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {

  constructor(private elem: ElementRef) {

    this.elem.nativeElement.style.backgroundColor = '#68FF33';

   }



}
