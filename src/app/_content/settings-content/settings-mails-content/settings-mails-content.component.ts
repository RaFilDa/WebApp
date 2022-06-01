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

  public invalid: boolean = false

  public ip = "smtp.gmail.com"
  public username = ""
  public SSL = false
  public ErrorOnly = false
  public password = ""
  public port = "25"

  cronAssemble(): string {
    return "0 " + this.minutes + " " + this.hours + " " + this.days + " " + this.months + " " + this.weekdays
  }

  cronDisassemble(cron: string): void {
    let cronDis: string[] = cron.split(" ")
    this.minutes = cronDis[1]
    this.hours = cronDis[2]
    this.days = cronDis[3]
    this.months = cronDis[4]
    this.weekdays = cronDis[5]
  }

  GetSetting(settings: string[]): void {
    this.ip = settings[0];
    this.port = settings[1];
    this.SSL = settings[2] == "true"
    this.username = settings[3]
    this.password = settings[4]
    this.ErrorOnly = settings[5] == "true"
  }

  ngOnInit(): void {
    let cron: string = ""
    let settings: string[] = []
    this.emailService.GetCron().subscribe(x => cron = x, null, () => this.cronDisassemble(cron))
    this.emailService.GetSmtp().subscribe(x => settings = x, null, () => this.GetSetting(settings))
  }

  submit() {
    let cron = this.cronAssemble()
    this.emailService.UpdateCron(cron);
  }

  submitSmtp() {
    let settings: string[] = [this.ip, String(this.port), String(this.SSL), this.username, this.password, String(this.ErrorOnly)]
    this.emailService.UpdateSmtp(settings)
  }

  checkValid() {
    let regex = new RegExp("^\\s*($|#|\\w+\\s*=|(\\?|\\*|(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?(?:,(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?)*)\\s+(\\?|\\*|(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?(?:,(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?)*)\\s+(\\?|\\*|(?:[01]?\\d|2[0-3])(?:(?:-|\\/|\\,)(?:[01]?\\d|2[0-3]))?(?:,(?:[01]?\\d|2[0-3])(?:(?:-|\\/|\\,)(?:[01]?\\d|2[0-3]))?)*)\\s+(\\?|\\*|(?:0?[1-9]|[12]\\d|3[01])(?:(?:-|\\/|\\,)(?:0?[1-9]|[12]\\d|3[01]))?(?:,(?:0?[1-9]|[12]\\d|3[01])(?:(?:-|\\/|\\,)(?:0?[1-9]|[12]\\d|3[01]))?)*)\\s+(\\?|\\*|(?:[1-9]|1[012])(?:(?:-|\\/|\\,)(?:[1-9]|1[012]))?(?:L|W)?(?:,(?:[1-9]|1[012])(?:(?:-|\\/|\\,)(?:[1-9]|1[012]))?(?:L|W)?)*|\\?|\\*|(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?(?:,(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?)*)\\s+(\\?|\\*|(?:[0-6])(?:(?:-|\\/|\\,|#)(?:[0-6]))?(?:L)?(?:,(?:[0-6])(?:(?:-|\\/|\\,|#)(?:[0-6]))?(?:L)?)*|\\?|\\*|(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?(?:,(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?)*)(|\\s)+(\\?|\\*|(?:|\\d{4})(?:(?:-|\\/|\\,)(?:|\\d{4}))?(?:,(?:|\\d{4})(?:(?:-|\\/|\\,)(?:|\\d{4}))?)*))$")
    this.invalid = !regex.test(this.cronAssemble())
    if((this.days == "*" && this.weekdays == "*") || (this.days == "?" && this.weekdays == "?"))
      this.invalid = true
  }
}
