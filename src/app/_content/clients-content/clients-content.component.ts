import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClientsPopupComponent} from "../../_popups/clients-popup/clients-popup.component";
import { IClient, ClientsServiceService} from "../../services/clients-service.service";
import {GroupsServiceService, IGroup} from "../../services/groups-service.service";
import {SessionsService} from "../../services/sessions.service";

@Component({
  selector: 'app-clients-content',
  templateUrl: './clients-content.component.html',
  styleUrls: ['./clients-content.component.css']
})
export class ClientsContentComponent implements OnInit {

  public groupsList: IGroup[] = [];
  public clients: IClient[] = []

  public searchExpression = '';
  public filterGroup = '';
  public IsLoading: boolean = true
  constructor(public dialog: MatDialog, public clientService: ClientsServiceService, public groupService: GroupsServiceService, public sessions: SessionsService) {}

  ngOnInit(): void {
    this.refresh();
  }

  openDialog(id: number) {
    let dialogRef = this.dialog.open(ClientsPopupComponent, {data: {id: id, clients: this.clients}});
    dialogRef.afterClosed().subscribe(x => this.clients = this.clients.filter(y => y.id != x));
  }

  refresh(): void {
    this.IsLoading = true
    this.clientService.getClients().subscribe(x => this.clients = x, null, () => this.IsLoading = false);
    this.groupService.getGroups().subscribe(x => this.groupsList = x);
    this.filterGroup = '';
    this.searchExpression = '';
  }

  colCalc(): number {
    return (window.innerWidth - 200) / 190
  }

  filterData(): IClient[] {
    let filtered: IClient[] = this.clients.slice();

    filtered = filtered.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()));

    return filtered;
  }
}
