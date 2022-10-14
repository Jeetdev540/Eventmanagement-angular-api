import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { OpenEventuserassDialogboxComponent } from '../open-eventuserass-dialogbox/open-eventuserass-dialogbox.component';

@Component({
  selector: 'app-event-user-ass',
  templateUrl: './event-user-ass.component.html',
  styleUrls: ['./event-user-ass.component.scss']
})
export class EventUserAssComponent implements OnInit {

  dataSource !: MatTableDataSource<any>;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(OpenEventuserassDialogboxComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getallevent();
      }
    }) 
  }
  getallevent() {
    // this.api.geteventuser()
    //   .subscribe({
    //     next: (res) => {
    //       this.dataSource = new MatTableDataSource(res);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
          
    //     },
    //     error: (err) => {
    //       console.log(err);
    //       alert("Event user Not added")
    //     }
    //   })
  }
}
