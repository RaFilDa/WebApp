import { Component, OnInit } from '@angular/core';
import {ISessionInfo, SessionsService} from 'src/app/services/sessions.service';
import {MatDialog} from "@angular/material/dialog";
import {SessionsPopupComponent} from "../../_popups/sessions-popup/sessions-popup.component";
import {SessionsCreatePopupComponent} from "../../_popups/sessions-create-popup/sessions-create-popup.component";

@Component({
  selector: 'app-sessions-content',
  templateUrl: './sessions-content.component.html',
  styleUrls: ['./sessions-content.component.css']
})
export class SessionsContentComponent implements OnInit {

  constructor(public sessions: SessionsService, public dialog: MatDialog) { }
  public searchExpression: string = ""
  public sessionList: ISessionInfo[] = []
  public IsLoading: boolean = true

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.IsLoading = true
    this.sessions.GetSessions().subscribe(x => this.sessionList = x, null, () => this.IsLoading = false)
  }

  filterData(): ISessionInfo[] {
    let filtered: ISessionInfo[] = this.sessionList.slice();

    filtered = filtered.filter(x => x.session.name.toLowerCase().includes(this.searchExpression.toLowerCase()));

    return filtered;
  }

  openDialog(session: ISessionInfo): void {
    this.dialog.open(SessionsPopupComponent, {data: session}).afterClosed().subscribe(x => this.refresh());
  }

  openEditDialog(): void {
    this.dialog.open(SessionsCreatePopupComponent).afterClosed().subscribe(x => this.refresh())
  }
}
