import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleAssComponent } from './user-role-ass.component';

describe('UserRoleAssComponent', () => {
  let component: UserRoleAssComponent;
  let fixture: ComponentFixture<UserRoleAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoleAssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoleAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
