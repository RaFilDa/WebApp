import {Component, Inject, Input, OnInit} from '@angular/core';
import {ISession, ISessionInfo, SessionsService} from "../../services/sessions.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-sessions-popup',
  templateUrl: './sessions-popup.component.html',
  styleUrls: ['./sessions-popup.component.css']
})
export class SessionsPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public info: ISessionInfo, public sessions: SessionsService, public matRef: MatDialogRef<SessionsPopupComponent>) { }

  ngOnInit(): void {

  }

  copied: boolean = false;

  ban(): void {
    this.sessions.BanSession(this.info.session.token).subscribe(null, null, () => this.matRef.close());
  }

  copyToken(): void {
    const selbox = document.createElement('textarea');
    selbox.value = this.info.session.token;
    document.body.appendChild(selbox);
    selbox.focus();
    selbox.select();
    document.execCommand('copy');
    document.body.removeChild(selbox);
    this.copied = true;
  }

}
