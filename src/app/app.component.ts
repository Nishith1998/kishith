import { Component, NgZone } from '@angular/core';
import { Observable, filter, fromEvent, mergeMap, take } from 'rxjs';
import { EVENT_INFO, EventName } from 'src/app/constants';
import { MainEventsService } from 'src/app/services/main-events.service';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kishith';
  // message: any;
  // installButton:any;
  // beforeInstallPrompt$!: Observable<any>;
  // flag: boolean = true;

  constructor(
    private fcmService: MessagingService,
    private eventService: MainEventsService
  ) {}
  eventName: string | null = null;
  eventInfo!: any//{ [k: string]:  { name: string; time: string; venue: string; dressCode: string; } };
  retureZero() {
    return 0;
  }
  ngOnInit() {
    this.eventService.eventDetails$.subscribe((data) => {
      if (data === null) {
        this.eventName = null;
      } else {
        this.eventName = data;
        this.eventInfo = EVENT_INFO[data];
      }
    });

    // this.installButton = document.getElementById('install-button');
    // this.beforeInstallPrompt$ = fromEvent(window, 'beforeinstallprompt');

    // this.beforeInstallPrompt$
    //   .pipe(
    //     filter((event) => event.userChoice !== 'accepted'), // Check if the app is not already installed
    //     take(1), // Ensure that we only listen to the first beforeinstallprompt event
    //     mergeMap((event: any) => {
    //       // this.ngZone.run(() => (this.installButton.style.display = 'block'));
    //       this.flag = true;
    //       return fromEvent(this.installButton, 'click').pipe(
    //         mergeMap(() => {
    //           event.preventDefault();
    //           // this.ngZone.run(() => (this.installButton.style.display = 'none'));
    //           this.flag = false;
    //           return event.prompt();
    //         }),
    //         mergeMap((choiceResult: any) => {
    //           if (choiceResult.outcome === 'accepted') {
    //             console.log('User accepted the installation');
    //           } else {
    //             console.log('User dismissed the installation');
    //           }
    //           return [];
    //         })
    //       );
    //     })
    //   )
    //   .subscribe();
  }

  // requestFcmPermission() {
  //   this.fcmService.requestPermission();
  // }
}
