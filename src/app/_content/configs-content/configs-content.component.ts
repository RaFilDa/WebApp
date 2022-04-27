import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ConfigCreatePopupComponent } from "../../_popups/config-create-popup/config-create-popup.component";
import {EditClientsPopupComponent} from "../../_popups/edit-clients-popup/edit-clients-popup.component";
import {ConfigsServiceService, IConfig} from "../../services/configs-service.service";

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
    public configService: ConfigsServiceService
  ) { }

  public IsLoading: boolean = true

  ngOnInit(): void {
    this.configService.GetConfigs().subscribe(x => this.configs = x, null, () => this.IsLoading = false);
  }

  openDialog(id: number) {
    this.dialog.open(ConfigCreatePopupComponent, {autoFocus: false, data: id});
  }

  openEditDialog() {
    this.dialogEdit.open(EditClientsPopupComponent, {autoFocus: false});
  }

  filterData(): IConfig[] {
    return this.configs.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()))
  }
}
