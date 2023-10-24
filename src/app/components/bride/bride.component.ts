import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { BRIDE_EVENT_LIST } from 'src/app/constants';
import gsap from "gsap";

@Component({
  selector: 'app-bride',
  templateUrl: './bride.component.html',
  styleUrls: ['./bride.component.scss'],
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
export class BrideComponent {
  eventList = BRIDE_EVENT_LIST;

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
  }
}
