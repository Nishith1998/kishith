import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DandiyaComponent } from './dandiya.component';

describe('DandiyaComponent', () => {
  let component: DandiyaComponent;
  let fixture: ComponentFixture<DandiyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DandiyaComponent]
    });
    fixture = TestBed.createComponent(DandiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
