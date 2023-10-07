import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceNightComponent } from './performance-night.component';

describe('PerformanceNightComponent', () => {
  let component: PerformanceNightComponent;
  let fixture: ComponentFixture<PerformanceNightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceNightComponent]
    });
    fixture = TestBed.createComponent(PerformanceNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
