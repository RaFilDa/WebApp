import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GroupCreatePopupComponent} from "../../_popups/group-create-popup/group-create-popup.component";
import {EditClientsPopupComponent} from "../../_popups/edit-clients-popup/edit-clients-popup.component";
import {GroupsServiceService, IGroup} from "../../services/groups-service.service";
import {SessionsService} from "../../services/sessions.service";

@Component({
  selector: 'app-groups-content',
  templateUrl: './groups-content.component.html',
  styleUrls: ['./groups-content.component.css']
})
export class GroupsContentComponent implements OnInit {

  public groups: IGroup[] = []
  public searchExpression = '';

  constructor(
    public dialogConfig: MatDialog,
    public dialogEdit: MatDialog,
    public groupsService: GroupsServiceService,
    public sessions: SessionsService
  ) { }

  public IsLoading: boolean = true

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.groupsService.getGroups().subscribe(x => this.groups = x, null, () => this.IsLoading = false)
    this.searchExpression = '';
  }

  openDialogConfig(id: number) {
    let dialog = this.dialogConfig.open(GroupCreatePopupComponent, {autoFocus: false, data: id});
    dialog.afterClosed().subscribe(x => {if(x) this.refresh()})
  }

  openDialogEdit() {
    this.dialogEdit.open(EditClientsPopupComponent, {autoFocus: false, data: 'Group'});
  }

  filterData(): IGroup[] {
    return this.groups.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()))
  }
}

