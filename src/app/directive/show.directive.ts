import { Directive, Input, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[show]'
})
export class ShowDirective {

  hasView: boolean = false;
  /**
   * Selector ile aynı isimde olalıdır. 
   * using *show="boolean" hide,show
   */
  @Input() set show(condition: boolean) {
    if (condition && !this.hasView) {
      this.vcRef.createEmbeddedView(this.tRef);
      this.hasView=true;
    }
    else if(!condition && this.hasView) {
      this.vcRef.createEmbeddedView(this.tRef);
      this.hasView=false;
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
