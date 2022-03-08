import { Injectable } from '@angular/core';
import {ConfigsServiceService, IConfig} from "./configs-service.service";

export interface IGroup {
  id: number,
  name: string,
}

export interface IGroupDetail {
  name: string,
  configs: IConfig[]
}

@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {

  public groups: IGroup[] = [
    {id: 0, name: 'Administrators'},
    {id: 1, name: 'Users'},
    {id: 2, name: 'Management'},
    {id: 3, name: 'Office'},
  ]

  public groupDetails: IGroupDetail[] = [
    { name: this.groups[0].name, configs: [this.configService.configs[0], this.configService.configs[1]]},
    { name: this.groups[1].name, configs: [this.configService.configs[0], this.configService.configs[2]]},
    { name: this.groups[2].name, configs: [this.configService.configs[3]] },
    { name: this.groups[3].name, configs: [this.configService.configs[1], this.configService.configs[2]]}
  ]

  getDetail(id: number): IGroupDetail {
    return this.groupDetails[id]
  }

  constructor(public configService: ConfigsServiceService) { }
}
