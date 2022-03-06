import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";

@Component({
  selector: 'app-clients-popup',
  templateUrl: './clients-popup.component.html',
  styleUrls: ['./clients-popup.component.css']
})

export class ClientsPopupComponent implements OnInit{

  constructor(public dialog: MatDialog) {
  }

  renderButton: boolean = false;

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async ngOnInit() {
    await this.delay(1);
    this.renderButton = true;
  }


  panelOpenStateConfigs: boolean = false;
  panelOpenStateGroups: boolean = false;

  togglePanelConfigs() {
    if(this.panelOpenStateGroups)
    {
      this.panelOpenStateGroups = !this.panelOpenStateGroups
    }
    this.panelOpenStateConfigs = !this.panelOpenStateConfigs
  }

  togglePanelGroups() {
    if(this.panelOpenStateConfigs)
    {
      this.panelOpenStateConfigs = !this.panelOpenStateConfigs
    }
    this.panelOpenStateGroups = !this.panelOpenStateGroups
  }

  openConfirmationDialog() {
    this.dialog.open(ConfirmationPopupComponent);
  }
}


