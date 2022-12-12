import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{

  constructor(private elref : ElementRef , private renderer : Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elref.nativeElement , 'backgroundColor' , 'blue');
  }

}
