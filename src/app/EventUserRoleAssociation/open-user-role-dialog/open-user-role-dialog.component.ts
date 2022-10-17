import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-open-user-role-dialog',
  templateUrl: './open-user-role-dialog.component.html',
  styleUrls: ['./open-user-role-dialog.component.scss']
})
export class OpenUserRoleDialogComponent implements OnInit {
  EventNames: any;
  Email: any;
  RoleName: any;
  EventUserRoleAssForm = new FormGroup({
    id: new FormControl(0),
    eventName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    roleName: new FormControl('', [Validators.required])
  })

  actiobtn: string = 'Save';

  constructor(private formbuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<OpenUserRoleDialogComponent>) { }


  ngOnInit(): void {
    this.GetEventForAss();
    this.GetUserRole();

  }

  AddEvent() {
    if (!this.editData) {
      if (this.EventUserRoleAssForm.valid) {
        this.api.PostEventUserAss(this.EventUserRoleAssForm.value)
          .subscribe({
            next: (res) => {
              alert("Event user Role Add SuccessFully")
              this.EventUserRoleAssForm.reset();
              this.dialogref.close('save');
            },
            error: () => {
              alert("Event user Role Not added")
            }
          })
      }
    }
    else {
      // this.updatedata();
    }
  }


  GetEventForAss() {
    this.api.GetEventUserRoleAss().subscribe({
      next: (res) => {
        this.EventNames = res;
      }

    })

  }
  GetUserRole() {
    this.api.GetUserRoleName().subscribe({
      next: (res) => {
        this.RoleName = res;
      }
    })
  }
  GetEmail(EventName: any) {
    this.api.GetEmail(EventName).subscribe({
      next: (res) => {
        this.Email = res;
      }
    })
  }





}
