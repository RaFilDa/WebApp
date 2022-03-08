import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClientsPopupComponent} from "../../_popups/clients-popup/clients-popup.component";
import { IClient, ClientsServiceService} from "../../services/clients-service.service";
import {GroupsServiceService, IGroup} from "../../services/groups-service.service";

@Component({
  selector: 'app-clients-content',
  templateUrl: './clients-content.component.html',
  styleUrls: ['./clients-content.component.css']
})
export class ClientsContentComponent implements OnInit {

  public groupsList: IGroup[] = this.groupService.groups;

  public searchExpression = '';
  public isInactive = false;
  public filterGroup = '';

  constructor(public dialog: MatDialog, public clientService: ClientsServiceService, public groupService: GroupsServiceService) {}

  ngOnInit(): void {
  }

  openDialog(id: number) {
    this.dialog.open(ClientsPopupComponent, {data: id});
  }

  colCalc(): number {
    return (window.innerWidth - 200) / 190
  }

  filterData(): IClient[] {
    let filteredData: IClient[] = this.clientService.getClients();

    if(this.isInactive)
      filteredData = filteredData.filter(x => !x.active);

    if(this.filterGroup !== '')
      filteredData = filteredData.filter(x => x.groups.some(x => x.id.toString() == this.filterGroup));

    filteredData = filteredData.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()));

    return filteredData;
  }
}
