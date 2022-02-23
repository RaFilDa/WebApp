import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GroupCreatePopupComponent} from "../_popups/group-create-popup/group-create-popup.component";
import {EditClientsPopupComponent} from "../_popups/edit-clients-popup/edit-clients-popup.component";

@Component({
  selector: 'app-groups-content',
  templateUrl: './groups-content.component.html',
  styleUrls: ['./groups-content.component.css']
})
export class GroupsContentComponent implements OnInit {

  public groups: string[] = [
  'Users', 'Administrators', 'Management',
  ];

  constructor(
    public dialogConfig: MatDialog,
    public dialogEdit: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialogConfig() {
    this.dialogConfig.open(GroupCreatePopupComponent, {autoFocus: false});
  }

  openDialogEdit() {
    this.dialogEdit.open(EditClientsPopupComponent, {autoFocus: false});
  }

}

