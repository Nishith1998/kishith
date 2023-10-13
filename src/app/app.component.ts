import { Component } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kishith';
  message: any;

  constructor(private fcmService: MessagingService) {}

  ngOnInit() {
    // requestFcmPermission() {
      // this.fcmService.requestPermission();
    // }
  }

  // requestFcmPermission() {
  //   this.fcmService.requestPermission();
  // }
}
