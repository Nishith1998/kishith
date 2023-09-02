import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandvoComponent } from './mandvo.component';

describe('MandvoComponent', () => {
  let component: MandvoComponent;
  let fixture: ComponentFixture<MandvoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MandvoComponent]
    });
    fixture = TestBed.createComponent(MandvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
