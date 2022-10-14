import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-open-eventuserass-dialogbox',
  templateUrl: './open-eventuserass-dialogbox.component.html',
  styleUrls: ['./open-eventuserass-dialogbox.component.scss']
})
export class OpenEventuserassDialogboxComponent implements OnInit {

  EventNames: any;
  EventUserAssForm = new FormGroup({
    id: new FormControl(0),
    eventName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    isActive: new FormControl('', [Validators.required])
  })
  actiobtn: string = 'Save';
  selectedValue: string = '';
  selectedEvent: string = '';
  constructor(private formbuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<OpenEventuserassDialogboxComponent>) { }

  ngOnInit(): void {
    this.GetEventForAss()
  }
  AddEvent() {
    if (!this.editData) {
      if (this.EventUserAssForm.valid) {
        this.api.PostEventUserAss(this.EventUserAssForm.value)
          .subscribe({
            next: (res) => {
              alert("Event Add SuccessFully")
              this.EventUserAssForm.reset();
              this.dialogref.close('save');
            },
            error: () => {
              alert("Event user Not added")
            }
          })
      }
    }
    else {
      this.updatedata();
    }
  }
  updatedata() {

    this.api.editeventuser(this.EventUserAssForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Event Updated SuccessFully")
          this.EventUserAssForm.reset();

          this.dialogref.close('update');
        },
        error: () => {
          alert("Event Not Updated")
        }
      })
  }
  GetEventForAss() {
    this.api.GetEventForAss().subscribe({
      next: (res) => {
        this.EventNames = res;
      }

    })

  }







}
