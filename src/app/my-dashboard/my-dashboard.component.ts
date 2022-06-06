import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {SessionsService} from "../services/sessions.service";
import {User, UsersService} from "../services/users.service";
import {MatDialog} from "@angular/material/dialog";
import {SetupComponent} from "../_popups/setup/setup.component";

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public sessions: SessionsService, public userService: UsersService, public dialog: MatDialog) { }

  public AlfredCounter: number = 0;

  public ShowAlfred: boolean = false;
  public darkmode: boolean = false;

  public users: User[] = []

  public ConfigsIsToggled: boolean = false;
  public ClientsIsToggled: boolean = false;
  public SessionsIsToggled: boolean = false
  public GroupsIsToggled: boolean = false;
  public ReportsIsToggled: boolean = false;
  public SettingsIsToggled: boolean = false;

  ngOnInit(): void {
    this.toggleClients();
    this.darkmode = this.sessions.loadMode()
    this.userService.GetAll().subscribe(x => this.users = x, null, () => {
      if(this.users.length < 1)
        this.dialog.open(SetupComponent, {disableClose: true, autoFocus: false})
    })
  }

  addCounter() {
    if (this.AlfredCounter == 5)
    {
      this.ShowAlfred = true;
    }
    else
    {
      this.AlfredCounter += 1;
    }
  }

  switch() {
    this.darkmode = !this.darkmode
    this.sessions.saveMode(this.darkmode)
  }

  toggleConfigs() {
    this.ConfigsIsToggled = true;
    this.ClientsIsToggled = false;
    this.SessionsIsToggled = false;
    this.GroupsIsToggled = false;
    this.ReportsIsToggled = false;
    this.SettingsIsToggled = false;
  }

  toggleClients() {
    this.ConfigsIsToggled = false;
    this.ClientsIsToggled = true;
    this.SessionsIsToggled = false;
    this.GroupsIsToggled = false;
    this.ReportsIsToggled = false;
    this.SettingsIsToggled = false;
  }

  toggleSessions() {
    this.ConfigsIsToggled = false;
    this.ClientsIsToggled = false;
    this.SessionsIsToggled = true;
    this.ReportsIsToggled = false;
    this.SettingsIsToggled = false;
  }

  toggleReports() {
    this.ConfigsIsToggled = false;
    this.ClientsIsToggled = false;
    this.SessionsIsToggled = false;
    this.ReportsIsToggled = true;
    this.SettingsIsToggled = false;
  }

  toggleSettings() {
    this.ConfigsIsToggled = false;
    this.ClientsIsToggled = false;
    this.SessionsIsToggled = false;
    this.ReportsIsToggled = false;
    this.SettingsIsToggled = true;
  }

  goBack() {
    this.sessions.logout()
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  showClients() {
    this.router.navigate(['clients'], {relativeTo: this.route})
  }
  showConfigs() {
    this.router.navigate(['configs'], {relativeTo: this.route})
  }
  showReports() {
    this.router.navigate(['reports'], {relativeTo: this.route})
  }
  showSessions() {
    this.router.navigate(['sessions'], {relativeTo: this.route})
  }
  showSettings() {
    this.router.navigate(['settings'], {relativeTo: this.route})
  }
}
