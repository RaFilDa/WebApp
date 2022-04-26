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
    return this.http.post<IConfig>('https://localhost:5001/Configs', conf);
  }

  getConfigsForComputer(compID: number): Observable<IConfig[]> {
    return this.http.get<IConfig[]>('https://localhost:5001/Configs/GetConfigsByCompID/' + compID)
  }

  delConfigForComputer(compID: number, configID: number): void {
    this.http.delete('https://localhost:5001/Configs/RemoveConfigFromComputer?compID='+ compID + '&configID=' + configID).subscribe()
  }

  addConfigForComputer(compID: number, configID: number): void {
    this.http.post('https://localhost:5001/Configs/AddConfigToComputer?confId=' + configID + '&compId=' + compID, "").subscribe()
  }

  getConfigId(name: string): Observable<number> {
    return this.http.get<number>('https://localhost:5001/Configs/ByName/' + name)
  }

  getDestinations(id: number): Observable<IDestination[]> {
    return this.http.get<IDestination[]>(environment.api + '/Configs/Destination/' + id, this.options);
  }

  addDestination(dest: IDestination): void {
    this.http.post('https://localhost:5001/Configs/Destination', dest).subscribe();
  }

  delDestination(dest: IDestination): void {
    this.http.delete('https://localhost:5001/Configs/RemoveDestinationFromConfig?destId=' + dest.id).subscribe();
  }

  getSources(id: number): Observable<ISource[]> {
    return this.http.get<ISource[]>(environment.api + '/Configs/Source/' + id, this.options);
  }

  addSource(source: ISource): void {
    this.http.post('https://localhost:5001/Configs/Source', source).subscribe();
  }

  delSource(source: ISource): void {
    this.http.delete('https://localhost:5001/Configs/RemoveSourceFromConfig?sourceId=' + source.id).subscribe();
  }

  updateConfig(config: IConfig): Observable<IConfig> {
    return this.http.put<IConfig>('https://localhost:5001/Configs/UpdateConfig?id=' + config.id, config);
  }

}
