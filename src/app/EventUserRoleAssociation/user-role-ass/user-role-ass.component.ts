import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { OpenUserRoleDialogComponent } from '../open-user-role-dialog/open-user-role-dialog.component';

@Component({
  selector: 'app-user-role-ass',
  templateUrl: './user-role-ass.component.html',
  styleUrls: ['./user-role-ass.component.scss']
})
export class UserRoleAssComponent implements OnInit {
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns: string[] = ['eventName','email','roleName'];

  constructor(public dialog: MatDialog,private api: ApiService) { }

  ngOnInit(): void {
    this.getallevent();
  }

  openDialog() {
    this.dialog.open(OpenUserRoleDialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
         this.getallevent();
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

  getallevent() {
    this.api.GetUserRole()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          
        },
        error: (err) => {
          console.log(err);
          alert("Event user user Not added")
        }
      })
  }
}
