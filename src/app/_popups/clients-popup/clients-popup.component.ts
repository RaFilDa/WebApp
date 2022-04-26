import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ClientsServiceService, IClient} from "../../services/clients-service.service";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";
import {ConfigsServiceService, IConfig} from "../../services/configs-service.service";
import {GroupsServiceService, IGroup} from "../../services/groups-service.service";

@Component({
  selector: 'app-clients-popup',
  templateUrl: './clients-popup.component.html',
  styleUrls: ['./clients-popup.component.css']
})

export class ClientsPopupComponent implements OnInit{

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public idDetail: {id: number, clients: IClient[] }, public clientService: ClientsServiceService,
              public dialogRef: MatDialogRef<ClientsPopupComponent>, public configService: ConfigsServiceService,
              public groupService: GroupsServiceService) {
  }

  info: IClient = {id: 0,name: 'placeholder',lastseen: '1-1-2002',ip: '1.1.1.1',mac: '1111'};

  renderButton: boolean = false;

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async ngOnInit() {
    this.clientService.getClient(this.idDetail.id).subscribe(x => this.info = x)
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
        this.clientService.remove(this.idDetail.id);
        this.dialogRef.close(this.idDetail.id);
      }
    })
  }

  checkConfig(config: IConfig): boolean {
    return true;
  }

  toggleConfig(config: IConfig): void {

  }

  saveChangesConfig() {

  }

  checkGroups(config: IGroup): boolean {
    return false;
  }

  toggleGroups(config: IGroup): void {

  }

  saveChangesGroups() {
  }
}


