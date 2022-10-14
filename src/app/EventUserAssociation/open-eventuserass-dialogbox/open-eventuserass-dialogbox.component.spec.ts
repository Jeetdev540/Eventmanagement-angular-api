import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenEventuserassDialogboxComponent } from './open-eventuserass-dialogbox.component';

describe('OpenEventuserassDialogboxComponent', () => {
  let component: OpenEventuserassDialogboxComponent;
  let fixture: ComponentFixture<OpenEventuserassDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenEventuserassDialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenEventuserassDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
