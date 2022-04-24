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
    return this.http.get<IDestination[]>('https://localhost:5001/Configs/Destination/' + id);
  }

  addDestination(dest: IDestination): void {
    this.http.post('https://localhost:5001/Configs/Destination', dest).subscribe();
  }

  delDestination(dest: IDestination): void {
    this.http.delete('https://localhost:5001/Configs/RemoveDestinationFromConfig?DestinationId=' + dest.id).subscribe();
  }

  getSources(id: number): Observable<ISource[]> {
    return this.http.get<ISource[]>('https://localhost:5001/Configs/Source/' + id);
  }

  addSource(source: ISource): void {
    this.http.post('https://localhost:5001/Configs/Source', source).subscribe();
  }

  delSource(source: ISource): void {
    this.http.delete('https://localhost:5001/Configs/RemoveSourceFromConfig?sourceId=' + source.id).subscribe();
  }

  updateConfig(config: IConfig): void {
    this.http.put('https://localhost:5001/Configs/UpdateConfig?id=' + config.id, config).subscribe();
  }

}
