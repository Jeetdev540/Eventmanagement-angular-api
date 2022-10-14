import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //event
  eventurl: string = 'http://localhost:5221/api/Event/Index';
  deleteurl: string = 'http://localhost:5221/api/Event/Delete?id=';
  // eventcreate()
  puturl: string = 'http://localhost:5221/api/Event/Edit';
  changstatusurl: string = 'http://localhost:5221/api/Event/ChangeActiveStaus?uniqueName=';

  // eventuserurl
  indexofuser: string = 'http://localhost:5221/api/EventUser/Index';
  createeventuser: string = 'http://localhost:5221/api/EventUser/Create';
  userstatus: string = 'http://localhost:5221/api/EventUser/ChangeActiveStaus?id='
  edituser: string = 'http://localhost:5221/api/EventUser/Edit'

  constructor(private http: HttpClient) { }

  postEvent(data: any) {
    return this.http.post<any>("http://localhost:5221/api/Event/Create", data);
  }
  getEvent() {
    return this.http.get<any>(this.eventurl);
  }
  putEvent(data: any, id: number) {
    return this.http.patch<any>(this.puturl, data);
  }
  deleteEvent(id: number) {
    return this.http.delete<any>(this.deleteurl + id);
  }
  ChangeStatus(uniqueName: string, isActive: boolean) {
    return this.http.patch<any>(this.changstatusurl + uniqueName + "&isActive=" + isActive, null);
  }

  //event user

  geteventuser() {
    return this.http.get<any>(this.indexofuser);
  }

  posteventuser(data: any) {
    return this.http.post<any>(this.createeventuser, data);
  }

  changeuserstatus(id: number, isActive: boolean) {
    return this.http.patch<any>(this.userstatus + id + "&isActive=" + isActive, null);
  }

  editeventuser(data: any, id: number) {
    return this.http.patch<any>(this.edituser, data);
  }

}
