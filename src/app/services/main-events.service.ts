import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainEventsService {

  eventDetails$: Subject<any> = new Subject();

  constructor() { 

  }
}
