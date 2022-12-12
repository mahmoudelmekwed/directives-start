import { Directive, ElementRef, HostListener, OnInit, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{


  constructor(private elref : ElementRef , private renderer : Renderer2 ) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elref.nativeElement , 'backgroundColor' , 'blue');
  }

@HostListener('mouseenter') mouseover(eventData : Event ){

  this.renderer.setStyle(this.elref.nativeElement , 'background-color' , 'blue' );
}

  @HostListener('mouseleave') mouseleave(eventData : Event ){

    this.renderer.setStyle(this.elref.nativeElement , 'background-color' , 'transparent');
}

}
