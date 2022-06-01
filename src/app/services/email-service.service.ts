import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(public http: HttpClient, public sessions: SessionsService) { }

  public get options(): { headers: HttpHeaders}  {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.sessions.token
      })
    };
  }

  public GetCron(): Observable<string> {
    return this.http.get<string>(environment.api + "/cron", this.options);
  }

  public UpdateCron(cron: string): void {
    this.http.post(environment.api + "/cron?cron=" + cron, null, this.options).subscribe()
  }

  public GetSmtp(): Observable<string[]> {
    return this.http.get<string[]>(environment.api + "/mailsettings", this.options);
  }

  public UpdateSmtp(settings: string[]): void {
    this.http.post(environment.api + "/mailsettings", settings, this.options).subscribe()
  }
}
