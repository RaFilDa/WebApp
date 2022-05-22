import {Component, Inject, Input, OnInit} from '@angular/core';
import {ISession, SessionsService} from "../../services/sessions.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-sessions-popup',
  templateUrl: './sessions-popup.component.html',
  styleUrls: ['./sessions-popup.component.css']
})
export class SessionsPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public info: ISession, public sessions: SessionsService) { }

  ngOnInit(): void {

  }

  ban(): void {
    this.sessions.BanSession(this.info.token);
  }

}
