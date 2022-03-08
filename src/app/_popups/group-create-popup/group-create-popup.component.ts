import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GroupsServiceService, IGroup, IGroupDetail} from "../../services/groups-service.service";
import {ConfigsServiceService, IConfig} from "../../services/configs-service.service";

@Component({
  selector: 'app-group-create-popup',
  templateUrl: './group-create-popup.component.html',
  styleUrls: ['./group-create-popup.component.css']
})
export class GroupCreatePopupComponent implements OnInit {

  public detail: IGroupDetail = {name: '', configs: []}

  constructor(@Inject(MAT_DIALOG_DATA) public idDetail: any, public groupsService: GroupsServiceService, public configsService: ConfigsServiceService) { }

  ngOnInit(): void {
    if(this.idDetail != -1)
      this.detail = Object.assign({},this.groupsService.getDetail(this.idDetail))
  }

  check(config: IConfig): boolean {
    return this.detail.configs.some(x => x === config)
  }

  toggle(config: IConfig): void {
    if(this.check(config)) {
      this.detail.configs = this.detail.configs.filter(x => x !== config)
    } else {
      this.detail.configs.push(config)
    }
  }

  saveChanges() {
    if(this.idDetail == -1) {
      this.groupsService.groupDetails.push(this.detail);
      this.groupsService.groups.push({id: this.groupsService.groups.length, name: this.detail.name});
    }

    this.groupsService.groupDetails[this.idDetail] = this.detail;
    this.groupsService.groups[this.idDetail].name = this.detail.name;
  }

}
