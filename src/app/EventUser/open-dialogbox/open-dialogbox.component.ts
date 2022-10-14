import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-open-dialogbox',
  templateUrl: './open-dialogbox.component.html',
  styleUrls: ['./open-dialogbox.component.scss']
})
export class OpenDialogboxComponent implements OnInit {
  EventUserForm !: FormGroup;
  actiobtn: string = 'Save';
  constructor(private formbuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<OpenDialogboxComponent>) { }

  ngOnInit(): void {
    this.EventUserForm = this.formbuilder.group({
      id: [0],
      firstName: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isActive: ['', Validators.required]
    })

    if (this.editData) {
      this.actiobtn = "Update";
      this.EventUserForm.controls['id'].setValue(this.editData.id);
      this.EventUserForm.controls['firstName'].setValue(this.editData.firstName);
      this.EventUserForm.controls['lastname'].setValue(this.editData.lastname);
      this.EventUserForm.controls['email'].setValue(this.editData.email);
      this.EventUserForm.controls['password'].setValue(this.editData.password);
      this.EventUserForm.controls['isActive'].setValue(this.editData.isActive);
      this.EventUserForm.get('email')?.disable();
      this.EventUserForm.get('password')?.disable();

    }

  }
  AddEvent() {

    if (!this.editData) {
      if (this.EventUserForm.valid) {
        this.api.posteventuser(this.EventUserForm.value)
          .subscribe({
            next: (res) => {
              alert("Event Add SuccessFully")
              this.EventUserForm.reset();
              this.dialogref.close('save');

            },
            error: () => {
              alert("Event user Not added")
            }
          })
      }
    }
    else {
      this.EventUserForm.get('password')?.enable();
      this.EventUserForm.get('email')?.enable();
      this.updatedata();
    }
  }
  updatedata() {

    this.api.editeventuser(this.EventUserForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Event Updated SuccessFully")
          this.EventUserForm.reset();

          this.dialogref.close('update');
        },
        error: () => {
          alert("Event Not Updated")
        }
      })
  }
}
