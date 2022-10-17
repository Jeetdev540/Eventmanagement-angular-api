import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenUserRoleDialogComponent } from './open-user-role-dialog.component';

describe('OpenUserRoleDialogComponent', () => {
  let component: OpenUserRoleDialogComponent;
  let fixture: ComponentFixture<OpenUserRoleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenUserRoleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenUserRoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
