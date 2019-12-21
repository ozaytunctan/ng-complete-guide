import { Directive, Input, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[show]'
})
export class UnlessDirective {
  /**
   * Selector ile aynı isimde olalıdır. 
   * using *show="boolean" hide,show
   */
  @Input() set show(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.tRef);
    }
    else {
      this.vcRef.clear();
    }
  }
  /**
   * Injection dom element
   * @param tRef  --> DOM elementi 
   * @param vcRef --> Container ref
   */
  constructor(private tRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
