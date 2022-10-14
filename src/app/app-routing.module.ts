import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventComponent } from './Event/event/event.component';
import { EventUserComponent } from './EventUser/event-user/event-user.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
