import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import gsap from 'gsap';
import { MainEventsService } from 'src/app/services/main-events.service';
import { EventObj } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('staggerRight', [
      transition(':enter', [
        style({
          opacity: 0,
          marginRight: '30px',
        }),
        animate(400),
      ]),
      transition(':leave', [
        animate(
          500,
          keyframes([
            style({
              offset: 0.5,
              marginLeft: '10px',
              opacity: 1,
            }),
            style({
              offset: 1,
              marginLeft: '-100%',
              opacity: 0,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  mLoc: boolean = false;
  eventList: EventObj[] = [
    {
      label: 'Bride',
      isLoading: true,
      width: 'w-20',
      routePath: '/bride',
      svgPath:
        'https://img.freepik.com/free-vector/hand-drawn-indian-bride-illustration_23-2149416978.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais',
      backgroundImage:
        'https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg?w=2000',
    },
    {
      label: 'Groom',
      isLoading: true,
      routePath: '/groom',
      svgPath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4twH8sS8wurrXHABS8t_xM_xzekLXJtf6-g&usqp=CAU',
      backgroundImage:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHUAsAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAIhAAAwEBAAEEAwEBAAAAAAAAAAECAxESITFRYQQTQYEy/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EAB0RAAMBAQEAAwEAAAAAAAAAAAABAgMREhMhMQT/2gAMAwEAAhEDEQA/APu1+QEtunmToNnQ+evBI+heSR6C16atOkc2MmidwhTgq8zVXSdUEmBwByPVBKhKYSYyUC5HqgkxCoNUUSwGh6oNUT9C6Pm2gHJVOiGza+SFMJN/I+Nhbjp6E0GqIs9X7MerRXFKl1CXHBzoHyA8zPIYZ5DbBbBdAtncNUm0xdGtgNmjEfHJjYoX4mp8PP1g+ga6VRQ2aJYodL9CC0IqShUGqESw0xLQpod0JMUmEmakA0OTDTFIJMahbQ3oSYpMKWNlNgNDUwkxao7zRRGbYPkcqGza+SP9qN/aW5x5QLhss818neX2SftNWg3gPxlXkd5E6sJUcZ5GtnAJhI4zh8pUi37lOkk9Il0+z3JfQoY6GTS/UdDPO0k60PTGJ+glDJYjgmkNTDTFJheRqQtoaqN6I8/4hkepTni6AcjpfQvNJeovqSJN9n3ib4X5YIyY9Mo0/IXsmK/e3/STy6amWTmpHLJIrWoa0+yNMNMLhzhFiv7DmyWaGTRnBVQVTQ2aJZobLBE1JTLGSyeGOhmCaXDwtZItD0N0Qak9Lp62TJ/LjHZ0TaC1pUP0JtMu/hV49I9SWMTPNj83n/Uv/Dq/Nb/4n/WS/BfRTxrp6T0U+rYv9zp8n2IJurfabbKskVZfzJfbBean9K8iqPYmyKoRYp4S6M6k2iLaGmemp6K1x6hk/QEaeWeZw0fWXGD4DulPvotByzvHgSRwPUamMn3FoOTAGOkdLJ4HSYJofH8KM2TQ/YozAJ7PH2ItUWW+k9ydUHpR9Hn6SIuT0Lz6JrL6FOSubRC5YUS+lX6foPPD6M8hvRcBxhstxg7LEqzzNSJNNAs5KM5MiB8wEiK76FMh+HobMjFIXCd0Sa4d9eErz4z1/DonXDoSYUa8/TzHHqD4llZguAujvZL4mpDnAPiEY7BkYmBw1ehvkTWg+KKc6RCqDWvDPBNpsiBPpvh0DNlELo65PYr6EvLoLxLVHf4Esuk1SB8pAsfoZGBasfUdOH0LaBrcjzxKIyKZx+hs5L4MJ62J5zHTnwdOYxQaIrQTMDFAxSEpNFOxakJx1DEvQ3xOB9EW2H9SJ3mepUpok0hJmjY06RVAtwV1IqkGmMdE1SKZTSEWNkn0oU64A9OG2TaNj5k83fRo3MryZHL4OiuG0j6y02ehn6j5khz1XyU5/kT7MmqWSXNFUx8jZgnnePkYt557iHLJ3ND1PA0kTr8ifkJbI7ywHNFCRqELVfISvp3lgOWONAkOTuAMI445tI4Eynwl1fWOuhFGDYQpi7Qxi79g0Mf4IpCLKKQi0Okm0JtES6Fen9JNCmDy/wCgw5UzTgj7dmq2g/20jDjOIxpBfvpGrezjjOIByh2e1Mqyts04XSQjRIsyXSvKFw44no8/RjplI044UTgt+4Do44wJC2xbNOOGoXQqjTgkaxNewi0ccPkm0JtSXU44pg8z+g//2Q==',
    },
  ];

  constructor(private eventService: MainEventsService) { }

  ngOnInit() {
    gsap.set(['.nishith', '.kirti', '.kishith'], { autoAlpha: 0 });

    // Create a timeline animation
    const tl = gsap.timeline();

    tl.from('.nishith', { x: -100, duration: 1, autoAlpha: 1 })
      .from('.kirti', { x: 100, duration: 1, autoAlpha: 1 }, '<')
      .to(
        ['.nishith', '.kirti'],
        { x: 0, duration: 1, autoAlpha: 0, display: 'none' },
        '+=1'
      )
      .to('.kishith', { autoAlpha: 1, duration: 1 });
    // Trigger the animations when the component is initialized
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: environment.firebase.vapidKey })
      .then((currentToken) => {
        if (currentToken) {
          console.log('Hurraaa!!! we got the token.....');
          console.log(currentToken);
        } else {
          console.log(
            'No registration token available. Request permission to generate one.'
          );
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // this.message=payload;
    });
  }
  
  setEventInfo(value: string) {
    if(value.endsWith('bride')) {
      this.eventService.eventInfo$.next('bride');
    } else {
      this.eventService.eventInfo$.next('groom');
    }
  }
}
