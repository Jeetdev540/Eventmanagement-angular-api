import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { OpenDialogboxComponent } from '../open-dialogbox/open-dialogbox.component';

@Component({
  selector: 'app-event-user',
  templateUrl: './event-user.component.html',
  styleUrls: ['./event-user.component.scss']
})
export class EventUserComponent implements OnInit {

  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(public dialog: MatDialog, private api: ApiService) { }
  displayedColumns: string[] = ['firstName', 'lastname', 'email','isActive' ,'action'];
  ngOnInit(): void {
    this.getallevent();
  }
  openDialog() {
    this.dialog.open(OpenDialogboxComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getallevent();
      }
    })
   
  }
  getallevent() {
    this.api.geteventuser()
      .subscribe({
        next: (res) => {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  changeUserstatus(id: number, isActive: boolean) {
    this.api.changeuserstatus(id, isActive).subscribe({
      next: (res) => {
        this.getallevent();
      }
    });
  }

  editEvent(row: any) {
   
    this.dialog.open(OpenDialogboxComponent, {
      width: '30%',
      data: row

    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getallevent();
      }

    })
  }
}
