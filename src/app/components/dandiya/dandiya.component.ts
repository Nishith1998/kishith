import { Component } from '@angular/core';
import { BLUR_AFTER_TIME, SHOW_AFTER_TIME, blurAfter } from 'src/app/constants';

@Component({
  selector: 'app-dandiya',
  templateUrl: './dandiya.component.html',
  styleUrls: ['./dandiya.component.scss']
})
export class DandiyaComponent {
  showAfterTime = SHOW_AFTER_TIME;
  
  ngOnInit() {
    blurAfter(BLUR_AFTER_TIME);
  }
}
