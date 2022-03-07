import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClientsPopupComponent} from "../../_popups/clients-popup/clients-popup.component";

export interface IClient {
  name: string
  login: string
  activity: boolean
  groups: string[]
}

@Component({
  selector: 'app-clients-content',
  templateUrl: './clients-content.component.html',
  styleUrls: ['./clients-content.component.css']
})
export class ClientsContentComponent implements OnInit {

  clients: IClient[] = [];

  public groupsList: string[] = ['Users', 'Administrators', 'Management'];

  public searchExpression = '';
  public isInactive = false;
  public filterGroup = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    for(let i = 1; i <= 50; i++)
    {
      this.clients.push({name: 'PC-' + i.toString(), login: '12.5.2022', activity: i % 2 == 0, groups: i % 2 == 0 ? ['Users'] : ['Management']})
    }
  }

  openDialog() {
    this.dialog.open(ClientsPopupComponent);
  }

  colCalc(): number {
    return (window.innerWidth - 200) / 190
  }

  filterData(): IClient[] {
    let filteredData: IClient[] = this.clients;

    if(this.isInactive)
      filteredData = filteredData.filter(x => x.activity);

    if(this.filterGroup != '')
      filteredData = filteredData.filter(x => x.groups.includes(this.filterGroup));

    filteredData = filteredData.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()));

    return filteredData;
  }
}
