import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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

  constructor(private http:HttpClient) { }

  GetConfigs(): Observable<IConfig[]> {
    return this.http.get<IConfig[]>('https://localhost:5001/Configs');
  }

  GetConfig(id: number): Observable<IConfig> {
    return this.http.get<IConfig>('https://localhost:5001/Configs/' + id);
  }

  getDestinations(id: number): Observable<IDestination[]> {
    return this.http.get<IDestination[]>('https://localhost:5001/Configs/Destination/' + id);
  }

  getSources(id: number): Observable<ISource[]> {
    return this.http.get<ISource[]>('https://localhost:5001/Configs/Source/' + id);
  }

}
