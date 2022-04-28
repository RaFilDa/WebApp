import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {SessionsService} from "../../services/sessions.service";

@Component({
  selector: 'app-settings-content',
  templateUrl: './settings-content.component.html',
  styleUrls: ['./settings-content.component.css']
})
export class SettingsContentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public sessions: SessionsService) { }

  public GeneralIsToggled: boolean = false;
  public LogsIsToggled: boolean = false;
  public UsersIsToggled: boolean = false;

  ngOnInit(): void {
  }

  toggleGeneral() {
    this.GeneralIsToggled = true;
    this.LogsIsToggled = false;
    this.UsersIsToggled = false;
  }

  toggleLogs() {
    this.GeneralIsToggled = false;
    this.LogsIsToggled = true;
    this.UsersIsToggled = false;
  }

  toggleUsers() {
    this.GeneralIsToggled = false;
    this.LogsIsToggled = false;
    this.UsersIsToggled = true;
  }

  goGeneral() {
    this.router.navigate(['general'], {relativeTo: this.route})
  }
  goLogs() {
    this.router.navigate(['logs'], {relativeTo: this.route})
  }
  goUsers() {
    this.router.navigate(['users'], {relativeTo: this.route})
  }
}
