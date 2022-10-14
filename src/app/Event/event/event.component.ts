import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component'; 
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  changactivestatus: boolean = false;

  displayedColumns: string[] = ['eventName', 'description', 'isActive', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor(public dialog: MatDialog, private api: ApiService) { }
  ngOnInit(): void {
    this.getallevent();
  }
  openDialog() {
    this.dialog.open(DialogBoxComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getallevent();
      }
    })
  }
  getallevent() {
    this.api.getEvent()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log(err);
          alert("Event Not added")
        }
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editEvent(row: any) {
    this.dialog.open(DialogBoxComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getallevent();
      }

    })
  }

  deleteEvent(id: number) {
    // this.api.deleteEvent(id)
    //   .subscribe({
    //     next: (res) => {
    //       alert("Event Delete SuccessFully")
    //       this.getallevent();
    //     },
    //     error: () => {
    //       alert("Event Not Delete")
    //     }
    //   })
    
  }

  changestatus(uniqueName: any, isActive: boolean) {
    this.api.ChangeStatus(uniqueName, isActive).subscribe({
      next: (res) => {
        this.getallevent();
      }
    });
  }

}
