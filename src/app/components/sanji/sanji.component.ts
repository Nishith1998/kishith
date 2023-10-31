import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeInAnimation, staggerRightAnimation } from 'src/app/animations';
import { BLUR_AFTER_TIME, EVENT_INFO_TEMPLATE_TIME, EventName, SHOW_AFTER_TIME, blurAfter } from 'src/app/constants';
import { MainEventsService } from 'src/app/services/main-events.service';

@Component({
  selector: 'app-sanji',
  templateUrl: './sanji.component.html',
  styleUrls: ['./sanji.component.scss'],
  animations: [fadeInAnimation, staggerRightAnimation],
})
export class SanjiComponent implements OnInit, OnDestroy {

  constructor(private eventService: MainEventsService) { }

  // imgPath: string = "https://st4.depositphotos.com/13045080/20173/v/1600/depositphotos_201735142-stock-illustration-floral-frame-wedding-invitation-greeting.jpg"
  showAfterTime = SHOW_AFTER_TIME;
  timer: any;
  ngOnInit() {
    this.timer = setTimeout(() => {
      this.eventService.eventDetails$.next(EventName.sanji);
    }, EVENT_INFO_TEMPLATE_TIME);
    
    blurAfter(BLUR_AFTER_TIME);
  }

  ngOnDestroy() {
    this.eventService.eventDetails$.next(null);
    clearTimeout(this.timer);
  }

}
