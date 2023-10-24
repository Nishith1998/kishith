import { Component } from '@angular/core';
import SplitType from 'split-type';
import { fadeInAnimation, staggerRightAnimation } from 'src/app/animations';
import { BLUR_AFTER_TIME, SHOW_AFTER_TIME, blurAfter } from 'src/app/constants';

@Component({
  selector: 'app-performance-night',
  templateUrl: './performance-night.component.html',
  styleUrls: ['./performance-night.component.scss'],
  animations: [fadeInAnimation, staggerRightAnimation],
})
export class PerformanceNightComponent {
  // imgPath: string = "https://st4.depositphotos.com/13045080/20173/v/1600/depositphotos_201735142-stock-illustration-floral-frame-wedding-invitation-greeting.jpg"
  showAfterTime = SHOW_AFTER_TIME;
  ngOnInit() {
    blurAfter(BLUR_AFTER_TIME);
    // setTimeout(() => {
    //   gsap.fromTo(
    //     '.animated-container',
    //     { filter: 'blur(0px)' },
    //     { filter: 'blur(3px)', duration: 2 }
    //   );
    // }, 2000);
  }
}
