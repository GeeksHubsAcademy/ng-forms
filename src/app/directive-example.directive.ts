import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveExample]'
})
export class DirectiveExampleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
