import { Directive, Input, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';
import gsap from "gsap";


@Directive({
  selector: '[showAfter]'
})
export class ShowAfterDirective implements OnInit {
  @Input('showAfter') delay!: number; // Input for specifying the delay in milliseconds
  @Input() animations!: string; // Input for specifying the delay in milliseconds

  @HostBinding('style.visibility') display = 'hidden';
  constructor(private el: ElementRef, private renderer: Renderer2) {}


  ngOnInit() {
      setTimeout(() => {
        // this.renderer.removeStyle(this.el.nativeElement, 'display');
        this.display = 'visible';
        if(this.animations) {
          this.applyAnimations(this.animations);
        }
      }, this.delay);
  }

  // ngOnChanges(change: any) {
  //   console.log("change: ", change);

  // }

  // ngAfterViewInit() {
  //   console.log("viewInit")
  //   this.renderer.listen('.mat-mdc-tab', 'click', () => {
  //     // Trigger the GSAP animation when the tab is clicked
  //     this.applyAnimations(this.animations);
  //   });
  // }

  applyAnimations(animationType: string) {
    switch(animationType) {
      case 'fadeInLeftToRight':
          gsap.fromTo(
              this.el.nativeElement,
              {
                x: -100,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
              }
            );
            break;
            
      case 'fadeInRightToLeft':
          gsap.fromTo(
              this.el.nativeElement,
              {
                x: 100,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
              }
          );
          break;
  }
  }
}
