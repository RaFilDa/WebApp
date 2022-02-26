import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ConfigCreatePopupComponent } from "../../_popups/config-create-popup/config-create-popup.component";
import {EditClientsPopupComponent} from "../../_popups/edit-clients-popup/edit-clients-popup.component";

@Component({
  selector: 'app-configs-content',
  templateUrl: './configs-content.component.html',
  styleUrls: ['./configs-content.component.css']
})
export class ConfigsContentComponent implements OnInit {

  public configs: string[] = [
    'FTP/LOCAL', 'LOCAL', 'Rem. Folder', 'Local/Rem.Folder/Local',
   ];

  constructor(
    public dialog: MatDialog,
    public dialogEdit: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ConfigCreatePopupComponent, {autoFocus: false});
  }

  openEditDialog() {
    this.dialogEdit.open(EditClientsPopupComponent, {autoFocus: false});
  }

}
