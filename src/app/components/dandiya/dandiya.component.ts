import { Component } from '@angular/core';
import {
  BLUR_AFTER_TIME,
  EVENT_INFO_TEMPLATE_TIME,
  EventName,
  SHOW_AFTER_TIME,
  blurAfter,
} from 'src/app/constants';
import { MainEventsService } from 'src/app/services/main-events.service';

@Component({
  selector: 'app-dandiya',
  templateUrl: './dandiya.component.html',
  styleUrls: ['./dandiya.component.scss'],
})
export class DandiyaComponent {
  showAfterTime = SHOW_AFTER_TIME;
  timer!: ReturnType<typeof setTimeout>;

  constructor(private eventService: MainEventsService) {}

  ngOnInit() {
    this.timer = setTimeout(() => {
      this.eventService.eventDetails$.next(EventName.dandiya);
    }, EVENT_INFO_TEMPLATE_TIME);
    
    blurAfter(BLUR_AFTER_TIME);
  }
  ngOnDestroy() {
    this.eventService.eventDetails$.next(null);
    clearTimeout(this.timer);
  }
}
