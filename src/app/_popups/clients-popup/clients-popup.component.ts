import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import { IClientDetail, ClientsServiceService } from "../../services/clients-service.service";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";
import {ConfigsServiceService, IConfig} from "../../services/configs-service.service";
import {GroupsServiceService, IGroup} from "../../services/groups-service.service";

@Component({
  selector: 'app-clients-popup',
  templateUrl: './clients-popup.component.html',
  styleUrls: ['./clients-popup.component.css']
})

export class ClientsPopupComponent implements OnInit{

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public idDetail: any, public clientService: ClientsServiceService,
              public dialogRef: MatDialogRef<ClientsPopupComponent>, public configService: ConfigsServiceService,
              public groupService: GroupsServiceService) {
  }

  detail: IClientDetail = this.clientService.getDetail(this.idDetail);

  public configs: IConfig[] = Object.assign([],this.detail.configs)
  public groups: IGroup[] = Object.assign([],this.detail.groups)

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
    this.dialog.open(ConfirmationPopupComponent).afterClosed().subscribe(result => {
      console.log(result)
      if(result)
      {
        this.dialogRef.close();
        this.clientService.remove(this.idDetail);
      }
    })
  }

  checkConfig(config: IConfig): boolean {
    return this.configs.some(x => x === config)
  }

  toggleConfig(config: IConfig): void {
    if(this.checkConfig(config)) {
      this.configs = this.configs.filter(x => x !== config)
    } else {
      this.configs.push(config)
    }
  }

  saveChangesConfig() {
    this.clientService.clientDetails[this.idDetail].configs = this.configs
  }

  checkGroups(config: IGroup): boolean {
    return this.groups.some(x => x === config)
  }

  toggleGroups(config: IGroup): void {
    if(this.checkGroups(config)) {
      this.groups = this.groups.filter(x => x !== config)
    } else {
      this.groups.push(config)
    }
  }

  saveChangesGroups() {
    this.clientService.clientDetails[this.idDetail].groups = this.groups
    this.clientService.clients[this.idDetail].groups = this.groups
  }
}


