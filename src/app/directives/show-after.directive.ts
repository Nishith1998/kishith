import { Directive, Input, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[showAfter]'
})
export class ShowAfterDirective implements OnInit {
  @Input('showAfter') delay!: number; // Input for specifying the delay in milliseconds

  @HostBinding('style.visibility') display = 'hidden';
  constructor(private el: ElementRef, private renderer: Renderer2) {}


  ngOnInit() {
      setTimeout(() => {
        // this.renderer.removeStyle(this.el.nativeElement, 'display');
        this.display = 'visible';
      }, this.delay);
  }
}
