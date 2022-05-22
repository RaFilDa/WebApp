import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {SessionsService} from "../../../services/sessions.service";

@Component({
  selector: 'app-settings-mails-content',
  templateUrl: './settings-mails-content.component.html',
  styleUrls: ['./settings-mails-content.component.css']
})
export class SettingsMailsContentComponent implements OnInit {

  constructor(public http: HttpClient, public sessions: SessionsService) { }

  public minutes: string = ""
  public hours: string = ""
  public days: string = ""
  public months: string = ""
  public weekdays: string = ""

  public get options(): { headers: HttpHeaders}  {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.sessions.token
      })
    };
  }

  cronAssemble(): string {
    return "0 " + this.minutes + " " + this.hours + " " + this.days + " " + this.months + " " + this.weekdays
  }

  ngOnInit(): void {
  }

  submit() {
    let cron = this.cronAssemble()
    this.http.post(environment.api + "/cron?cron=" + cron, null, this.options).subscribe()
  }

  change() {
  }
}
