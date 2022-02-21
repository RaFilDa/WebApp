import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClientsPopupComponent} from "../_popups/clients-popup/clients-popup.component";

@Component({
  selector: 'app-clients-content',
  templateUrl: './clients-content.component.html',
  styleUrls: ['./clients-content.component.css']
})
export class ClientsContentComponent implements OnInit {

  public iterator = Array(50).fill(0)

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ClientsPopupComponent);
  }

  colCalc(): number {
    return (window.innerWidth - 200) / 190
  }

  ngOnInit(): void {
  }

}
