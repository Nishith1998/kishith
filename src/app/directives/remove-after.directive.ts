import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[removeAfter]'
})
export class RemoveAfterDirective implements OnInit {
  @Input() removeAfter: number | undefined = 500; // Input in milliseconds

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.removeAfter) {
      setTimeout(() => {
        this.renderer.removeChild(this.el.nativeElement.parentElement, this.el.nativeElement);
      }, this.removeAfter);
    }
  }
}
