import {
    Directive,
    ElementRef,
    Renderer2, OnInit,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';


@Directive({
    selector: '[textHiglight]'
})
export class TextHighLight implements OnInit {

    @Input() defaultColor: string = "transparent";

    // @Input() highLightColor: string = "blue";

    @Input('textHiglight') highLightColor: string = "blue";

    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    constructor(private elemRef: ElementRef, private rendered: Renderer2) {
    }


    ngOnInit(): void {
    }

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        //this.rendered.setStyle(this.elemRef.nativeElement, 'color', 'blue');
        // this.rendered.setStyle(this.elemRef.nativeElement, 'background-color', 'yellow');
        //  this.backgroundColor = 'yellow';

        this.backgroundColor = this.highLightColor;

    }


    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        //  this.rendered.setStyle(this.elemRef.nativeElement, 'background-color', 'black');
        //this.rendered.setStyle(this.elemRef.nativeElement, 'color', 'red');
        //  this.backgroundColor = 'red';
        this.backgroundColor = this.defaultColor;


    }


}