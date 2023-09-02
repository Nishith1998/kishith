import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('staggerRight', [
      transition(':enter', [
        style({
          opacity: 0,
          marginRight: '30px'
        }),
        animate(400)
      ]),
      transition(':leave',[
        animate(500, keyframes([
          style({
            offset:0.5,
            marginLeft:'10px',
            opacity:1
          }),
          style({
            offset:1,
            marginLeft:'-100%',
            opacity:0
          })
        ]))
      ])
    ]),
    trigger('slideUp', [
      transition('void => *', [
        style({ transform: 'translateY(100%)', opacity: 1 }),
        animate(3000),
      ]),
    ]),
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(800),
      ]),
    ]),
  ],
})
export class HomeComponent {
  eventList: {label: string, routePath: string}[] = [
    {label:"Sanji", routePath: "/sanji"},
  {label:"Performance night", routePath: "/performanceNight"},
  {label:"Mandap Ropan", routePath: "/mandapRopan"},
  {label:"Mamera", routePath: "/mamera"},
  {label:"Haldi", routePath: "/haldi"},
  {label:"Dandiya", routePath: "/dandiya"},
  {label:"Marriage", routePath: "/marriage"}
  ];
    ngOnInit() {
      // Trigger the animations when the component is initialized
    }
    handleEventClick(eventName: string) {
      
    }
}
