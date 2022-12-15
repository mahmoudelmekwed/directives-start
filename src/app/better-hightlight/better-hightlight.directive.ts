import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 , Input  } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{
  @Input() defaultColor : string ='transparent';
  @Input('appBetterHightlight') hightlightColor : string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor : string ; 
  constructor(private elref : ElementRef , private renderer : Renderer2 ) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elref.nativeElement , 'backgroundColor' , 'blue');
  }
@HostListener('mouseenter') mouseover(eventData : Event ){

  // this.renderer.setStyle(this.elref.nativeElement , 'background-color' , 'blue' );
  this.backgroundColor = this.hightlightColor;
}

@HostListener('mouseleave') mouseleave(eventData : Event ){

    // this.renderer.setStyle(this.elref.nativeElement , 'background-color' , 'transparent');
    this.backgroundColor = this.defaultColor;
}

}
