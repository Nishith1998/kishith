import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationItemsComponent } from './navigation-items.component';

describe('NavigationItemsComponent', () => {
  let component: NavigationItemsComponent;
  let fixture: ComponentFixture<NavigationItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationItemsComponent]
    });
    fixture = TestBed.createComponent(NavigationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
