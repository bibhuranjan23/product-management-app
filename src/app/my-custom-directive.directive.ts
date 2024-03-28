import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {
  
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 
    'green';
    el.nativeElement.style.color = 
    'white';
    }
}


