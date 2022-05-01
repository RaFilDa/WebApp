import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ConfigCreatePopupComponent } from "../../_popups/config-create-popup/config-create-popup.component";
import {ConfigsServiceService, IConfig} from "../../services/configs-service.service";
import {SessionsService} from "../../services/sessions.service";

@Component({
  selector: 'app-configs-content',
  templateUrl: './configs-content.component.html',
  styleUrls: ['./configs-content.component.css']
})
export class ConfigsContentComponent implements OnInit {

  public searchExpression = '';
  public configs: IConfig[] = [];

  constructor(
    public dialog: MatDialog,
    public dialogEdit: MatDialog,
    public configService: ConfigsServiceService,
    public sessions: SessionsService
  ) { }

  public IsLoading: boolean = true

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.configService.GetConfigs().subscribe(x => this.configs = x, null, () => this.IsLoading = false);
  }

  openDialog(id: number) {
    this.dialog.open(ConfigCreatePopupComponent, {autoFocus: false, data: id}).afterClosed().subscribe(null,null,() => this.refresh());
  }

  filterData(): IConfig[] {
    return this.configs.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()))
  }
}
