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

  public LogsIsToggled: boolean = false;
  public UsersIsToggled: boolean = false;

  ngOnInit(): void {
  }

  toggleLogs() {
    this.LogsIsToggled = true;
    this.UsersIsToggled = false;
  }

  toggleUsers() {
    this.LogsIsToggled = false;
    this.UsersIsToggled = true;
  }

  goLogs() {
    this.router.navigate(['logs'], {relativeTo: this.route})
  }
  goUsers() {
    this.router.navigate(['users'], {relativeTo: this.route})
  }
}
