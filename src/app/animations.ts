import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition('void => *', [style({ opacity: 0 }), animate(800)]),
]);

export const slideUpAnimation = trigger('slideUp', [
  transition('void => *', [
    style({ transform: 'translateY(100%)', opacity: 1 }),
    animate(3000),
  ]),
]);

export const staggerRightAnimation = trigger('staggerRight', [
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
]);
