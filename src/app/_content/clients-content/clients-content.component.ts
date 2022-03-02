import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClientsPopupComponent} from "../../_popups/clients-popup/clients-popup.component";

export interface IClient {
  name: string
  login: string
}

@Component({
  selector: 'app-clients-content',
  templateUrl: './clients-content.component.html',
  styleUrls: ['./clients-content.component.css']
})
export class ClientsContentComponent implements OnInit {

  public clients: IClient[] = [];
  public searchExpression = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    for(let i = 1; i <= 50; i++)
    {
      this.clients.push({name: i.toString(), login: '6.2.2022 16:36:21'})
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
