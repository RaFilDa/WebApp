import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-clients-popup',
  templateUrl: './clients-popup.component.html',
  styleUrls: ['./clients-popup.component.css']
})

export class ClientsPopupComponent {

  panelOpenStateConfigs: boolean = false;
  panelOpenStateGroups: boolean = false;

  togglePanelConfigs() {
    if(this.panelOpenStateGroups = true)
    {
      this.panelOpenStateGroups = !this.panelOpenStateGroups
    }
    this.panelOpenStateConfigs = !this.panelOpenStateConfigs
  }

  togglePanelGroups() {
    if(this.panelOpenStateConfigs = true)
    {
      this.panelOpenStateConfigs = !this.panelOpenStateConfigs
    }
    this.panelOpenStateGroups = !this.panelOpenStateGroups
  }
}


