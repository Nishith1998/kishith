import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, staggerRightAnimation } from 'src/app/animations';

@Component({
  selector: 'app-sanji',
  templateUrl: './sanji.component.html',
  styleUrls: ['./sanji.component.scss'],
  animations: [fadeInAnimation, staggerRightAnimation],
})
export class SanjiComponent implements OnInit {

  constructor() { }

  // imgPath: string = "https://st4.depositphotos.com/13045080/20173/v/1600/depositphotos_201735142-stock-illustration-floral-frame-wedding-invitation-greeting.jpg"
  ngOnInit() {
  }

}
