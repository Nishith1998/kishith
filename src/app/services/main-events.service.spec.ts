import { TestBed } from '@angular/core/testing';

import { MainEventsService } from './main-events.service';

describe('MainEventsService', () => {
  let service: MainEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
