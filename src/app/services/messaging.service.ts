import { Injectable } from '@angular/core';
import { Messaging, messagingInstance$ } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {  
  constructor() {
    const messaging = getMessaging();

    // Request FCM permission when the service is instantiated
    this.requestPermission(messaging);

    // Handle incoming messages when the app is in the foreground
    onMessage(messaging, (payload) => {
      console.log('Received FCM message:', payload);
      // You can handle the incoming message here
    });
  }

  requestPermission(messaging: any) {
    getToken(messaging)
      .then((currentToken) => {
        if (currentToken) {
          console.log('FCM token:', currentToken);
          // You can send the token to your server or store it as needed
        } else {
          console.log('No FCM token available');
        }
      })
      .catch((err) => {
        console.error('Error while retrieving FCM token:', err);
      });
  }
}
