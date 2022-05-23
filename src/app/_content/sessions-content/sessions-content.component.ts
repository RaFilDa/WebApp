import { Component, OnInit } from '@angular/core';
import {ISession, SessionsService} from 'src/app/services/sessions.service';
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
  public sessionList: ISession[] = []
  public IsLoading: boolean = true

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.IsLoading = true
    this.sessions.GetSessions().subscribe(x => this.sessionList = x, null, () => this.IsLoading = false)
  }

  filterData(): ISession[] {
    let filtered: ISession[] = this.sessionList.slice();

    filtered = filtered.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()));

    return filtered;
  }

  openDialog(session: ISession): void {
    this.dialog.open(SessionsPopupComponent, {data: session}).afterClosed().subscribe(x => this.refresh());
  }

  openEditDialog(): void {
    this.dialog.open(SessionsCreatePopupComponent).afterClosed().subscribe(x => this.refresh())
  }
}
