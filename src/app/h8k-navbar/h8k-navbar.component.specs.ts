import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H8kNavbarComponent } from './h8k-navbar.component';

describe('H8kNavbarComponent', () => {
  let component: H8kNavbarComponent;
  let fixture: ComponentFixture<H8kNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [H8kNavbarComponent]
    });
    fixture = TestBed.createComponent(H8kNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
