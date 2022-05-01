import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SessionsService} from "./sessions.service";
import {environment} from "../../environments/environment";

export interface IConfig {
  id: number
  name: string
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
  path: string,
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

  addConfig(conf: IConfig): Observable<IConfig> {
    return this.http.post<IConfig>(environment.api + '/Configs', conf, this.options);
  }

  deleteConfig(id: number): void {
    this.http.delete(environment.api + "/Configs/" + id, this.options).subscribe()
  }

  getConfigsForComputer(compID: number): Observable<IConfig[]> {
    return this.http.get<IConfig[]>(environment.api + '/Configs/GetConfigsByCompID/' + compID, this.options)
  }

  delConfigForComputer(compID: number, configID: number): void {
    this.http.delete(environment.api + '/Configs/RemoveConfigFromComputer?compID='+ compID + '&configID=' + configID, this.options).subscribe()
  }

  addConfigForComputer(compID: number, configID: number): void {
    this.http.post(environment.api + '/Configs/AddConfigToComputer?confId=' + configID + '&compId=' + compID, "", this.options).subscribe()
  }

  getConfigId(name: string): Observable<number> {
    return this.http.get<number>(environment.api + '/Configs/ByName/' + name, this.options)
  }

  getDestinations(id: number): Observable<IDestination[]> {
    return this.http.get<IDestination[]>(environment.api + '/Configs/Destination/' + id, this.options);
  }

  addDestination(dest: IDestination): void {
    this.http.post(environment.api + '/Configs/Destination', dest, this.options).subscribe();
  }

  delDestination(dest: IDestination): void {
    this.http.delete(environment.api + '/Configs/RemoveDestinationFromConfig?destId=' + dest.id, this.options).subscribe();
  }

  getSources(id: number): Observable<ISource[]> {
    return this.http.get<ISource[]>(environment.api + '/Configs/Source/' + id, this.options);
  }

  addSource(source: ISource): void {
    this.http.post(environment.api + '/Configs/Source', source, this.options).subscribe();
  }

  delSource(source: ISource): void {
    this.http.delete(environment.api + '/Configs/RemoveSourceFromConfig?sourceId=' + source.id, this.options).subscribe();
  }

  updateConfig(config: IConfig): Observable<IConfig> {
    return this.http.put<IConfig>(environment.api + '/Configs/UpdateConfig?id=' + config.id, config, this.options);
  }

}
