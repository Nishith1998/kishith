import { Component } from '@angular/core';
import { BLUR_AFTER_TIME, EVENT_INFO_TEMPLATE_TIME, EventName, SHOW_AFTER_TIME, blurAfter } from 'src/app/constants';
import { MainEventsService } from 'src/app/services/main-events.service';

@Component({
  selector: 'app-haldi',
  templateUrl: './haldi.component.html',
  styleUrls: ['./haldi.component.scss']
})
export class HaldiComponent {
  showAfterTime = SHOW_AFTER_TIME;
  timer!: ReturnType<typeof setTimeout>;

  constructor(private eventService: MainEventsService) { }

  ngOnInit() {
    this.timer = setTimeout(() => {
      this.eventService.eventDetails$.next(EventName.haldi);
    }, EVENT_INFO_TEMPLATE_TIME);
    blurAfter(BLUR_AFTER_TIME);
  }
  ngOnDestroy() {
    this.eventService.eventDetails$.next(null);
    clearTimeout(this.timer);
  }

}
