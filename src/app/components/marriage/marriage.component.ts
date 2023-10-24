import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BLUR_AFTER_TIME, SHOW_AFTER_TIME, blurAfter } from 'src/app/constants';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(+100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),  
    ]),
  ]
})
export class MarriageComponent {
  animationType: string = 'fadeInRightToLeft';
  showAfterTime = SHOW_AFTER_TIME;

  ngOnInit() {
    blurAfter(BLUR_AFTER_TIME);
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log("value: ", event);
    this.animationType = 'fadeInRightToLeft';
    // const tabAnimation = event.tab.textLabel; // Assuming your tab labels match the animation types
    // const imgElement = event.tab?.querySelector('[showAfter]');
    // if (imgElement) {
    //   imgElement.setAttribute('animations', tabAnimation);
    // }
  }
}
