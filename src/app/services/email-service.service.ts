import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SessionsService} from "./sessions.service";

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

  public UpdateCron(cron: string): void {
    this.http.post(environment.api + "/cron?cron=" + cron, null, this.options).subscribe()
  }

  public UpdateSmtp(settings: string[]): void {
    this.http.post(environment.api + "/mailsettings", settings, this.options).subscribe()
  }
}
