import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {SessionsService} from "../services/sessions.service";

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public sessions: SessionsService) { }

  public AlfredCounter: number = 0;

  public ShowAlfred: boolean = false;

  public ConfigsIsToggled: boolean = false;
  public ClientsIsToggled: boolean = false;
  public GroupsIsToggled: boolean = false;
  public ReportsIsToggled: boolean = false;
  public SettingsIsToggled: boolean = false;

  ngOnInit(): void {
    this.toggleClients();
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

  toggleConfigs() {
    this.ConfigsIsToggled = true;
    this.ClientsIsToggled = false;
    this.GroupsIsToggled = false;
    this.ReportsIsToggled = false;
    this.SettingsIsToggled = false;
  }

  toggleClients() {
    this.ConfigsIsToggled = false;
    this.ClientsIsToggled = true;
    this.GroupsIsToggled = false;
    this.ReportsIsToggled = false;
    this.SettingsIsToggled = false;
  }

  toggleGroups() {
    this.ConfigsIsToggled = false;
    this.ClientsIsToggled = false;
    this.GroupsIsToggled = true;
    this.ReportsIsToggled = false;
    this.SettingsIsToggled = false;
  }

  toggleReports() {
    this.ConfigsIsToggled = false;
    this.ClientsIsToggled = false;
    this.GroupsIsToggled = false;
    this.ReportsIsToggled = true;
    this.SettingsIsToggled = false;
  }

  toggleSettings() {
    this.ConfigsIsToggled = false;
    this.ClientsIsToggled = false;
    this.GroupsIsToggled = false;
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
  showGroups() {
    this.router.navigate(['groups'], {relativeTo: this.route})
  }
  showSettings() {
    this.router.navigate(['settings'], {relativeTo: this.route})
  }
}
