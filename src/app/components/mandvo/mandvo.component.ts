import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, staggerRightAnimation } from 'src/app/animations';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { BLUR_AFTER_TIME, SHOW_AFTER_TIME, blurAfter } from 'src/app/constants';

@Component({
  selector: 'app-mandvo',
  templateUrl: './mandvo.component.html',
  styleUrls: ['./mandvo.component.scss'],
  animations: [fadeInAnimation, staggerRightAnimation],
})
export class MandvoComponent implements OnInit {
  showAfterTime = SHOW_AFTER_TIME;

  imgPath: string = "https://st4.depositphotos.com/13045080/20173/v/1600/depositphotos_201735142-stock-illustration-floral-frame-wedding-invitation-greeting.jpg"
  ngOnInit() {
    const ourText = new SplitType('div.text-3xl', { types: 'chars' });
    const chars = ourText.chars;
    gsap.fromTo(
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
    gsap.fromTo(
      '.toran',
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        yoyo: true,
        ease: 'back.out(1.5)',
        // stagger: 0.05,
        duration: 2,
        // ease: 'power4.out',
      }
    );
    gsap.fromTo(
      '.ganesha',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
    // setTimeout(() => {
    //   gsap.fromTo(
    //     '.animated-container',
    //     { filter: 'blur(0px)' },
    //     { filter: 'blur(3px)', duration: 2 }
    //   );
    // }, 2000);
    blurAfter(BLUR_AFTER_TIME);
  }
}
