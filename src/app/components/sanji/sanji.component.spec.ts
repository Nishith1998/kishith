/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SanjiComponent } from './sanji.component';

describe('SanjiComponent', () => {
  let component: SanjiComponent;
  let fixture: ComponentFixture<SanjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
