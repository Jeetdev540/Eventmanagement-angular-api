import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventComponent } from './Event/event/event.component';
import { EventUserComponent } from './EventUser/event-user/event-user.component';
import { EventUserAssComponent } from './EventUserAssociation/event-user-ass/event-user-ass.component';
import { UserRoleAssComponent } from './EventUserRoleAssociation/user-role-ass/user-role-ass.component';
import { HomeComponent } from './Home/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path:'EventUser',
    component: EventUserComponent
  },
  {
    path:'EventUserAss',
    component: EventUserAssComponent
  },
  {
    path :'EventUserRoleAss',
    component : UserRoleAssComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
