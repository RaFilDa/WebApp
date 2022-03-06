import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClientsPopupComponent} from "../../_popups/clients-popup/clients-popup.component";

export interface IClient {
  name: string
  login: string
  activity: string
}

@Component({
  selector: 'app-clients-content',
  templateUrl: './clients-content.component.html',
  styleUrls: ['./clients-content.component.css']
})
export class ClientsContentComponent implements OnInit {

  clients: IClient[] = [];
  public searchExpression = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    for(let i = 1; i <= 50; i++)
    {
      this.clients.push({name: 'User' + i.toString(), login: 'azhwdgbwad', activity: 'OFFLINE'})
    }
  }

  openDialog() {
    this.dialog.open(ClientsPopupComponent);
  }

  colCalc(): number {
    return (window.innerWidth - 200) / 190
  }

  filterData(): IClient[] {
    return this.clients.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()))
  }
}
