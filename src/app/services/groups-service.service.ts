import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface IGroup {
  id: number,
  name: string,
}

@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {

  constructor(private http: HttpClient) { }

  getGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>('https://localhost:5001/Groups');
  }

  getGroup(id: number): Observable<IGroup> {
    return this.http.get<IGroup>('https://localhost:5001/Groups/' + id);
  }

  updateGroup(id: number, name: string): Observable<IGroup> {
    return this.http.put<IGroup>('https://localhost:5001/Groups/UpdateGroup/' + id, {name: name});
  }
}
