import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { OpenEventuserassDialogboxComponent } from '../open-eventuserass-dialogbox/open-eventuserass-dialogbox.component';

@Component({
  selector: 'app-event-user-ass',
  templateUrl: './event-user-ass.component.html',
  styleUrls: ['./event-user-ass.component.scss']
})
export class EventUserAssComponent implements OnInit {

  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(public dialog: MatDialog,public api :ApiService) { }
  displayedColumns: string[] = ['eventName','email','isActive' ,'action'];
  ngOnInit(): void {
    this.getallevent();
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
    this.api.GetEventUserass()
      .subscribe({
        next: (res) => {
          console.log(res);
          
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          
        },
        error: (err) => {
          console.log(err);
          alert("Event user Not added")
        }
      })
  }
  changeUserstatus(id: number, isActive: boolean) {
      this.api.changeuserstatus(id, isActive).subscribe({
        next: (res) => {
          this.getallevent();
        }
      });
  }

  // editEvent(row: any) {
   
  //   this.dialog.open(OpenEventuserassDialogboxComponent, {
  //     width: '30%',
  //     data: row

  //   }).afterClosed().subscribe(val => {
  //     if (val === 'update') {
  //       this.getallevent();
  //     }

  //   })
  // }
}
