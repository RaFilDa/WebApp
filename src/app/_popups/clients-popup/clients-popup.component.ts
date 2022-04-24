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
  configs: IConfig[] = []
  selectedConfigs: IConfig[] = []
  tmpSelectedConfigs: IConfig[] = []

  renderButton: boolean = false;

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async ngOnInit() {
    this.clientService.getClient(this.idDetail.id).subscribe(x => this.info = x)
    this.configService.GetConfigs().subscribe(x => this.configs = x)
    this.configService.getConfigsForComputer(this.idDetail.id).subscribe(x => this.selectedConfigs = x, null, () => this.tmpSelectedConfigs = this.selectedConfigs.slice())
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
    return this.tmpSelectedConfigs.filter(x => x.id == config.id).length == 1
  }

  toggleConfig(config: IConfig): void {
    if(!this.checkConfig(config))
    {
      this.tmpSelectedConfigs.push(config)
    }
    else
      this.tmpSelectedConfigs = this.tmpSelectedConfigs.filter(x => x.id != config.id)
  }

  saveChangesConfig() {

    console.log(this.selectedConfigs)
    console.log(this.tmpSelectedConfigs)

    let delConfig = this.selectedConfigs.filter(x => this.tmpSelectedConfigs.filter(y => y.id == x.id).length == 0)
    let addConfig = this.tmpSelectedConfigs.filter(x => this.selectedConfigs.filter(y => y.id == x.id).length == 0)

    console.log(delConfig)
    console.log(addConfig)

    for(let conf of delConfig)
      this.configService.delConfigForComputer(this.idDetail.id, conf.id)
    for(let conf of addConfig)
      this.configService.addConfigForComputer(this.idDetail.id, conf.id)
  }

  checkGroups(config: IGroup): boolean {
    return false;
  }

  toggleGroups(config: IGroup): void {

  }

  saveChangesGroups() {
  }
}


