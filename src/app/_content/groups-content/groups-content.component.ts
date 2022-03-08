import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GroupCreatePopupComponent} from "../../_popups/group-create-popup/group-create-popup.component";
import {EditClientsPopupComponent} from "../../_popups/edit-clients-popup/edit-clients-popup.component";
import {GroupsServiceService, IGroup} from "../../services/groups-service.service";

@Component({
  selector: 'app-groups-content',
  templateUrl: './groups-content.component.html',
  styleUrls: ['./groups-content.component.css']
})
export class GroupsContentComponent implements OnInit {

  public searchExpression = '';

  constructor(
    public dialogConfig: MatDialog,
    public dialogEdit: MatDialog,
    public groupsService: GroupsServiceService
  ) { }

  ngOnInit(): void {
  }

  openDialogConfig(id: number) {
    this.dialogConfig.open(GroupCreatePopupComponent, {autoFocus: false, data: id});
  }

  openDialogEdit() {
    this.dialogEdit.open(EditClientsPopupComponent, {autoFocus: false, data: 'Group'});
  }

  filterData(): IGroup[] {
    return this.groupsService.groups.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()))
  }
}

