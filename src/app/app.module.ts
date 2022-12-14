import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EventUserComponent } from './EventUser/event-user/event-user.component';
import { EventComponent } from './Event/event/event.component';
import { HomeComponent } from './Home/home/home.component';
import { OpenDialogboxComponent } from './EventUser/open-dialogbox/open-dialogbox.component';
import { EventUserAssComponent } from './EventUserAssociation/event-user-ass/event-user-ass.component';
import { OpenEventuserassDialogboxComponent } from './EventUserAssociation/open-eventuserass-dialogbox/open-eventuserass-dialogbox.component';
import {MatSelectModule} from '@angular/material/select';
import { UserRoleAssComponent } from './EventUserRoleAssociation/user-role-ass/user-role-ass.component';
import { OpenUserRoleDialogComponent } from './EventUserRoleAssociation/open-user-role-dialog/open-user-role-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    EventUserComponent,
    EventComponent,
    HomeComponent,
    OpenDialogboxComponent,
    EventUserAssComponent,
    OpenEventuserassDialogboxComponent,
    UserRoleAssComponent,
    OpenUserRoleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
