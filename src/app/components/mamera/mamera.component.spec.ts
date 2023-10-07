import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MameraComponent } from './mamera.component';

describe('MameraComponent', () => {
  let component: MameraComponent;
  let fixture: ComponentFixture<MameraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MameraComponent]
    });
    fixture = TestBed.createComponent(MameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
