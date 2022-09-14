import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef) {

  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highLighter("red")
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highLighter("")
  // }

  // private highLighter(color: string) {
  //   this.el.nativeElement.style.color = color;
  // }  

  @Input('appCustomDirective') format:string='';

  @HostListener('focus') onFocus (){
     let value:string = this.el.nativeElement.value;
     
     if(this.format == 'lowercase'){
       this.el.nativeElement.value = value.toLowerCase();  
     }
     else this.el.nativeElement.value = value.toUpperCase();
    
  }

  @HostListener('blur') onBlur(){
    console.log('It is Blurred');
    
  }
}
