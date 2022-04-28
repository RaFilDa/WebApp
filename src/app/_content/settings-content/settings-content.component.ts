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

  ngOnInit(): void {
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
