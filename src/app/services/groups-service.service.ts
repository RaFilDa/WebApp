import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionsService} from "./sessions.service";
import {environment} from "../../environments/environment";

export interface IGroup {
  id: number,
  name: string,
}

@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {

  constructor(private http: HttpClient, private sessions: SessionsService) { }

    public get options(): { headers: HttpHeaders }  {
        return {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.sessions.token
          })
        };
      }

  getGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(environment.api + '/Groups', this.options);
  }

  getGroup(id: number): Observable<IGroup> {
    return this.http.get<IGroup>(environment.api + '/Groups/' + id, this.options);
  }

  updateGroup(id: number, name: string): Observable<IGroup> {
    return this.http.put<IGroup>(environment.api + '/Groups/UpdateGroup/' + id, {name: name}, this.options);
  }
}
