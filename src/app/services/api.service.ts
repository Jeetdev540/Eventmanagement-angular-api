import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //event
  eventurl: string = 'http://localhost:5221/api/Event/Index';
  deleteurl: string = 'http://localhost:5221/api/Event/Delete?id=';
  puturl: string = 'http://localhost:5221/api/Event/Edit';
  changstatusurl: string = 'http://localhost:5221/api/Event/ChangeActiveStaus?uniqueName=';

  // eventuserurl
  indexofuser: string = 'http://localhost:5221/api/EventUser/Index';
  createeventuser: string = 'http://localhost:5221/api/EventUser/Create';
  userstatus: string = 'http://localhost:5221/api/EventUser/ChangeActiveStaus?id='
  edituser: string = 'http://localhost:5221/api/EventUser/Edit'

  //Event user asss url
  indexofuserassurl: string = 'http://localhost:5221/api/EventUserAssociation/Index';
  addeventassurl: string = 'http://localhost:5221/api/EventUserAssociation/Create';
  changuserstatusass: string = 'http://localhost:5221/api/EventUserAssociation/ChangeActiveStaus?uniqueName=';

  //User role Associstoin url
  Userrole: string = 'http://localhost:5221/api/UserRoleAssociation/Index';





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

  //event user asss
  GetEventUserass() {
    return this.http.get<any>(this.indexofuserassurl);
  }
  GetEventForAss() {
    return this.http.get<any>(this.eventurl);
  }
  PostEventUserAss(data: any) {
    return this.http.post<any>(this.addeventassurl, data);
  }

  changuserassstatus(uniqueName: string, isActive: boolean) {
    return this.http.patch<any>(this.changuserstatusass + uniqueName + "&isActive=" + isActive, null);
  }

  //user role

  GetUserRole() {
    return this.http.get<any>(this.Userrole);
  }
  GetEventUserRoleAss() {
    return this.http.get<any>('http://localhost:5221/api/UserRoleAssociation/EventnameDropDown');
  }
  GetUserRoleName() {
    return this.http.get<any>('http://localhost:5221/api/UserRoleAssociation/UserRoleName');
  }
  GetEmail(EventName: any) {
    return this.http.get<any>('http://localhost:5221/api/UserRoleAssociation/AssociatedEmail?EventName=', EventName);
  }


}

