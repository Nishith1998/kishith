import { Component } from '@angular/core';
import { BLUR_AFTER_TIME, SHOW_AFTER_TIME, blurAfter } from 'src/app/constants';

@Component({
  selector: 'app-mamera',
  templateUrl: './mamera.component.html',
  styleUrls: ['./mamera.component.scss']
})
export class MameraComponent {
  showAfterTime = SHOW_AFTER_TIME;

  ngOnInit() {
    blurAfter(BLUR_AFTER_TIME);
  }
}
