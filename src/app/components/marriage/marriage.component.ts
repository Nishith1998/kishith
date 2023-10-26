import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BLUR_AFTER_TIME, EVENT_INFO_TEMPLATE_TIME, EventName, SHOW_AFTER_TIME, blurAfter } from 'src/app/constants';
import { MainEventsService } from 'src/app/services/main-events.service';

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
  showAfterTime = SHOW_AFTER_TIME;
  selectedTab: 'function' | 'food' = 'function';
  loadingCount: number = 0;

  constructor(private eventService: MainEventsService) {}


  ngOnInit() {
    // setTimeout(() => {
    //   this.eventService.eventDetails$.next(EventName.dandiya);
    // }, EVENT_INFO_TEMPLATE_TIME);
    // blurAfter(BLUR_AFTER_TIME);
    this.changeTabTo('function');
  }

  changeTabTo(value: 'function' | 'food') {
    this.eventService.eventDetails$.next(null);
    this.selectedTab = value;
    if(value === 'function') {
      setTimeout(() => {
        this.eventService.eventDetails$.next(EventName.marriageFunction);
      }, EVENT_INFO_TEMPLATE_TIME);
      blurAfter(BLUR_AFTER_TIME);
    } else {
      setTimeout(() => {
        this.eventService.eventDetails$.next(EventName.marriageFood);
      }, EVENT_INFO_TEMPLATE_TIME);
      blurAfter(BLUR_AFTER_TIME);
    }


  }

  ngOnDestroy() {
    this.eventService.eventDetails$.next(null);
  }
}
