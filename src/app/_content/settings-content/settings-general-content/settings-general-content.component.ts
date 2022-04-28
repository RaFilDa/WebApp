import { Component, OnInit } from '@angular/core';
import {SessionsService} from "../../../services/sessions.service";

@Component({
  selector: 'app-settings-general-content',
  templateUrl: './settings-general-content.component.html',
  styleUrls: ['./settings-general-content.component.css']
})
export class SettingsGeneralContentComponent implements OnInit {

  constructor(private sessions: SessionsService) { }

  darkMode: boolean = false

  ngOnInit(): void {
    this.darkMode = this.sessions.loadMode()
  }

  ChangeMode(): void {
    this.darkMode = !this.darkMode
    this.sessions.saveMode(this.darkMode)
  }

}
