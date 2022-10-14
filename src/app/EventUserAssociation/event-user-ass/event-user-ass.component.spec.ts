import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUserAssComponent } from './event-user-ass.component';

describe('EventUserAssComponent', () => {
  let component: EventUserAssComponent;
  let fixture: ComponentFixture<EventUserAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventUserAssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventUserAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
