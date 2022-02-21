import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ReportsPopupComponent} from "../_popups/reports-popup/reports-popup.component";

@Component({
  selector: 'app-reports-content',
  templateUrl: './reports-content.component.html',
  styleUrls: ['./reports-content.component.css']
})
export class ReportsContentComponent implements OnInit {

  public iterator = Array(20).fill(0);

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ReportsPopupComponent);
  }

  ngOnInit(): void {
  }

}
