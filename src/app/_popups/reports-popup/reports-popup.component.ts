import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-reports-popup',
  templateUrl: './reports-popup.component.html',
  styleUrls: ['./reports-popup.component.css']
})
export class ReportsPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

}
