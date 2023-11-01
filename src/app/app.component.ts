import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Observable, combineLatest, filter, fromEvent, mergeMap, take, tap } from 'rxjs';
import { EVENT_INFO_BRIDE, EVENT_INFO_GROOM, EventName } from 'src/app/constants';
import { MainEventsService } from 'src/app/services/main-events.service';
import { MessagingService } from 'src/app/services/messaging.service';
import gsap from "gsap";
import SplitType from 'split-type';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kishith';
  // message: any;
  // installButton:any;
  beforeInstallPrompt$!: Observable<any>;
  flag!: boolean;
  @ViewChild('installBtn') installButton!: ElementRef;

  constructor(
    private fcmService: MessagingService,
    private eventService: MainEventsService,
    private swUpdate: SwUpdate,
    private snackbar: MatSnackBar,
  ) {
    // if ((navigator as any).getInstalledRelatedApps) {
    //   (navigator as any).getInstalledRelatedApps()
    //     .then((apps: any) => {
    //       if (apps.length > 0) {
    //         // A related app is installed, hide the install button
    //         // this.hideInstallButton();
    //         this.flag = false;
    //       } else {
    //         // No related apps are installed, show the install button
    //         // this.showInstallButton();
    //         this.flag = true;

    //       }
    //     });
    // }
  }
  

  eventName: string | null = null;
  eventInfo!: any//{ [k: string]:  { name: string; time: string; venue: string; dressCode: string; } };
  retureZero() {
    return 0;
  }
  ngOnInit() {
    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackbar.open('Update Available', 'Reload');
  snack
    .onAction()
    .subscribe(() => {
      window.location.reload();
    });
  })
    // const ourText = new SplitType('.card-title', { types: 'chars' });
    // const chars = ourText.chars;
    // gsap.fromTo(
    //   chars,
    //   {
    //     y: 100,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     stagger: 0.05,
    //     duration: 2,
    //     ease: 'power4.out',
    //   }
    // );
    combineLatest(this.eventService.eventDetails$, this.eventService.eventInfo$).subscribe(([eventType, eventFor]) => {
      if(eventType == null) {
        this.eventName = null
      } else {
        this.eventName = eventType;
        if(eventFor === 'bride') {
          this.eventInfo = EVENT_INFO_BRIDE[eventType];
        } else {
          this.eventInfo = EVENT_INFO_GROOM[eventType];
        }
      }
    })
    // this.eventService.eventDetails$.subscribe((data) => {
    //   if (data === null) {
    //     this.eventName = null;
    //   } else {
    //     this.eventName = data;
    //     this.eventInfo = EVENT_INFO[data];
    //   }
    // });

    // this.installButton = document.getElementById('install-button');
    this.beforeInstallPrompt$ = fromEvent(window, 'beforeinstallprompt');
    // this.beforeInstallPrompt$.subscribe((e) => {console.log("asdf1")}, (v) => {console.log("asdf12")})
    // console.log("asdf")
    // this.beforeInstallPrompt$
    //   .pipe(
    //     // tap((e) => {console.log("asdf1", e.userChoice);if(e.userChoice === 'accepted') this.flag = false}),
    //     filter((event) => {console.log("asdf"); return event.userChoice !== 'accepted'}), // Check if the app is not already installed
    //     // take(1), // Ensure that we only listen to the first beforeinstallprompt event
    //     mergeMap((event: any) => {
    //       // this.ngZone.run(() => (this.installButton.style.display = 'block'));
    //       this.flag = true;
    //       // console.log("asdf2")
    //       return fromEvent(this.installButton.nativeElement, 'click').pipe(
    //         mergeMap(() => {
    //           event.preventDefault();
    //           // this.ngZone.run(() => (this.installButton.style.display = 'none'));
    //           // this.flag = false;
    //           return event.prompt();
    //         }),
    //         mergeMap((choiceResult: any) => {
    //           if (choiceResult.outcome === 'accepted') {
    //             console.log('User accepted the installation');
    //             this.flag = false;
    //           } else {
    //             console.log('User dismissed the installation');
    //             this.flag = true;
    //           }
    //           return [];
    //         })
    //       );
    //     })
    //   )
    //   .subscribe((v) => {console.log("valuE: ", v)}, (err) => {console.log("error: ", err)});
  }

  ngAfterViewInit() {
  }

  // requestFcmPermission() {
  //   this.fcmService.requestPermission();
  // }
}
