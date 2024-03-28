import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDirective]'
})
export class MyStructuralDirectiveDirective {

  @Input() set appMyStructuralDirective(condition: boolean) {
    if (condition) {
    this.viewContainer.createEmbeddedView( this.templateRef);
    } else {
    this.viewContainer.clear();
    }
    }
    constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

}
