import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMainComponent } from './booking-main.component';

describe('BookingMainComponent', () => {
  let component: BookingMainComponent;
  let fixture: ComponentFixture<BookingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
