import{Directive, ElementRef,Input,HostListener} from '@angular/core';

@Directive({
    selector: "[menuClose]"
})
export class MenuClose {
    @Input()
    public menu: any;

    constructor(private element: ElementRef) { }

    @HostListener("click")
    private onClick() {
        //this.menu.classList.remove("open");
       // document.getElementsByClassName('.navbar-collapse').collapse('hide');
    }
}