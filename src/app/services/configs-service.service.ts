import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionsService} from "./sessions.service";
import {environment} from "../../environments/environment";

export interface IConfig {
  id: number
  name: string
  userID: 1,
  backupFrequency: string
  retentionSize: number
  packageSize?: number
  backupType: number
  fileType: boolean
  cron: string
  timeZone: string
}

export interface IDestination {
  id: number
  configID: number
  type: string,
  path?: string,
  ip?: string,
  username?: string,
  password?: string,
}

export interface ISource {
  id: number
  configID: number
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigsServiceService {

  constructor(private http:HttpClient, private sessions: SessionsService ) { }

    public get options(): { headers: HttpHeaders}  {
        return {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.sessions.token
          })
        };
      }

  GetConfigs(): Observable<IConfig[]> {
    return this.http.get<IConfig[]>(environment.api + '/Configs', this.options);
  }

  GetConfig(id: number): Observable<IConfig> {
    return this.http.get<IConfig>(environment.api + '/Configs/' + id, this.options);
  }

  getDestinations(id: number): Observable<IDestination[]> {
    return this.http.get<IDestination[]>(environment.api + '/Configs/Destination/' + id, this.options);
  }

  getSources(id: number): Observable<ISource[]> {
    return this.http.get<ISource[]>(environment.api + '/Configs/Source/' + id, this.options);
  }

}
