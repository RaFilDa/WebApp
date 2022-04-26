import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionsService} from "./sessions.service";
import {environment} from "../../environments/environment";

export interface IClient {
  id: number
  name: string
  ip: string
  mac: string
  lastseen: string
}

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  constructor(private http:HttpClient, private sessions: SessionsService ) { }

    public get options(): { headers: HttpHeaders}  {
        return {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.sessions.token
          })
        };
      }

  getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(environment.api + '/Computers', this.options);
  }

  getClient(id: number): Observable<IClient> {
    return this.http.get<IClient>(environment.api + '/Computers/' + id, this.options);
  }

  remove(id: number): void {
    this.http.delete(environment.api + '/Computers/' + id, this.options)
      .subscribe(x => console.log(x));
  }
}
