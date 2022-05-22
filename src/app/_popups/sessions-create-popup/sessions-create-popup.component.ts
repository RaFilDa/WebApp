import { Component, OnInit } from '@angular/core';
import {SessionsService} from "../../services/sessions.service";

@Component({
  selector: 'app-sessions-create-popup',
  templateUrl: './sessions-create-popup.component.html',
  styleUrls: ['./sessions-create-popup.component.css']
})
export class SessionsCreatePopupComponent implements OnInit {

  constructor(public sessions: SessionsService) { }

  public name: string = ""

  ngOnInit(): void {
  }

  submit(): void {
    this.sessions.AddSession(this.name);
  }
}
