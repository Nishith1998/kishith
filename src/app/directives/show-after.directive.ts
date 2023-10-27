import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  HostBinding,
} from '@angular/core';
import gsap from 'gsap';
import SplitType from 'split-type';

@Directive({
  selector: '[showAfter]',
})
export class ShowAfterDirective implements OnInit {
  @Input('showAfter') delay!: number; // Input for specifying the delay in milliseconds
  @Input() animations!: string; // Input for specifying the delay in milliseconds
  @Input() restart: boolean = false;

  @HostBinding('style.visibility') display = 'hidden';
  animationObj: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      // this.renderer.removeStyle(this.el.nativeElement, 'display');
      this.display = 'visible';
      if (this.animations) {
        this.applyAnimations(this.animations);
      }
    }, this.delay);
  }

  ngOnChanges(change: any) {
    console.log('change: ', change);
    if (change['restart'] && change['restart'].currentValue === true && this.animationObj) {
      this.animationObj.reversed(false);
      this.animationObj.seek(0);
    }
  }

  // ngAfterViewInit() {
  //   console.log("viewInit")
  //   this.renderer.listen('.mat-mdc-tab', 'click', () => {
  //     // Trigger the GSAP animation when the tab is clicked
  //     this.applyAnimations(this.animations);
  //   });
  // }

  applyAnimations(animationType: string) {
    let ourText, chars;
    switch (animationType) {
      case 'fadeInLeftToRight':
        this.animationObj = gsap.fromTo(
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
        this.animationObj = gsap.fromTo(
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
      case 'stagger':
        this.animationObj = gsap.from(this.el.nativeElement, {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
        break;
      case 'chars':
        ourText = new SplitType(this.el.nativeElement, { types: 'chars' });
        chars = ourText.chars;
        const splitTextTimeline = gsap.timeline();

        this.animationObj = splitTextTimeline.from(chars, {
          duration: 2,
          scale: 4,
          autoAlpha: 0,
          rotationX: -180,
          transformOrigin: "100% 50%",
          ease: "back",
          stagger: 0.02
        });
        break;
      case 'charsFadeUp':
        ourText = new SplitType(this.el.nativeElement, { types: 'chars' });
        chars = ourText.chars;
        this.animationObj = gsap.fromTo(
          chars,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
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
