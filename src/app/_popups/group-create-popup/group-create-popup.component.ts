import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GroupsServiceService, IGroup,} from "../../services/groups-service.service";
import {ConfigsServiceService, IConfig} from "../../services/configs-service.service";

@Component({
  selector: 'app-group-create-popup',
  templateUrl: './group-create-popup.component.html',
  styleUrls: ['./group-create-popup.component.css']
})
export class GroupCreatePopupComponent implements OnInit {

  public info: IGroup = {id: 0, name: ''}

  constructor(@Inject(MAT_DIALOG_DATA) public idDetail: any, public groupsService: GroupsServiceService, private matRef:MatDialogRef<GroupCreatePopupComponent>) { }

  ngOnInit(): void {
    if(this.idDetail != -1)
      this.groupsService.getGroup(this.idDetail).subscribe(x => this.info = x);
  }

  check(config: IConfig): boolean {
    return false
  }

  toggle(config: IConfig): void {
  }

  saveChanges() {
    this.groupsService.updateGroup(this.idDetail, this.info.name).subscribe(null,null,() => this.matRef.close(true));
  }

}
