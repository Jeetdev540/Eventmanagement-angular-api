import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  EventForm !: FormGroup;
  actiobtn: string = 'Save';
  constructor(private formbuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogref: MatDialogRef<DialogBoxComponent>
  ) { }

  ngOnInit(): void {
    this.EventForm = this.formbuilder.group({
      id:[0],
      eventName: ['', Validators.required],
      description: ['', Validators.required],
      isActive: ['', Validators.required]
    })

    if (this.editData) {
      this.actiobtn = "Update";
      this.EventForm.controls['id'].setValue(this.editData.id);
      this.EventForm.controls['eventName'].setValue(this.editData.eventName);
      this.EventForm.controls['description'].setValue(this.editData.description);
      this.EventForm.controls['isActive'].setValue(this.editData.isActive);

    }
  }
  AddEvent() {
    if (!this.editData) {
      if (this.EventForm.valid) {
        this.api.postEvent(this.EventForm.value)
          .subscribe({
            next: (res) => {
              alert("Event Add SuccessFully")
              this.EventForm.reset();
              this.dialogref.close('save');
            },
            error: () => {
              alert("Event Not added")
            }
          })
      }
    }
    else{
      this.updatedata();
    }
  }
  updatedata(){
    this.api.putEvent(this.EventForm.value,this.editData.id)
    .subscribe({
      next: (res) => {
        alert("Event Updated SuccessFully")
        this.EventForm.reset();
        this.dialogref.close('update');
      },
      error: () => {
        alert("Event Not Updated")
      }
    })
  }

}
