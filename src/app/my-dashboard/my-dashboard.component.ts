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

  ngOnInit(): void {
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
