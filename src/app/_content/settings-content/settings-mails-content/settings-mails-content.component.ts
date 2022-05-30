import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {SessionsService} from "../../../services/sessions.service";
import {EmailServiceService} from "../../../services/email-service.service";

@Component({
  selector: 'app-settings-mails-content',
  templateUrl: './settings-mails-content.component.html',
  styleUrls: ['./settings-mails-content.component.css']
})
export class SettingsMailsContentComponent implements OnInit {

  constructor(public emailService: EmailServiceService, public sessions: SessionsService) { }

  public minutes: string = ""
  public hours: string = ""
  public days: string = ""
  public months: string = ""
  public weekdays: string = ""

  public ip = "smtp.gmail.com"
  public username = ""
  public SSL = false
  public ErrorOnly = false
  public password = ""
  public port = "25"

  cronAssemble(): string {
    return "0 " + this.minutes + " " + this.hours + " " + this.days + " " + this.months + " " + this.weekdays
  }

  ngOnInit(): void {
  }

  submit() {
    let cron = this.cronAssemble()
    this.emailService.UpdateCron(cron);
  }

  submitSmtp() {
    let settings: string[] = [this.ip, this.port, String(this.SSL), this.username, this.password, String(this.ErrorOnly)]
    this.emailService.UpdateSmtp(settings)
  }

  change() {
  }
}
