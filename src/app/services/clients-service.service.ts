import { Injectable } from '@angular/core';
import {GroupsServiceService, IGroup} from "./groups-service.service";
import {ConfigsServiceService, IConfig} from "./configs-service.service";

export interface IClient {
  id: number
  name: string
  active: boolean
  groups: IGroup[]
}

export interface IClientDetail {
  name: string
  login: string
  timezone: string
  country: string
  ip: string
  mac: string
  groups: IGroup[]
  configs: IConfig[]
}

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  clients: IClient[] = [
    {
      id: 0,
      name:'PC-1',
      active: true,
      groups: [this.groupService.groups[0], this.groupService.groups[1]]
    },
    {
      id: 1,
      name:'PC-2',
      active: true,
      groups: [this.groupService.groups[0], this.groupService.groups[2]]
    },
    {
      id: 2,
      name:'PC-3',
      active: false,
      groups: [this.groupService.groups[1], this.groupService.groups[2]]
    }
  ]

  clientDetails: IClientDetail[] = [
    {
      name: 'PC-1',
      login: '8.3.2022 16:30:24',
      timezone: 'CET (+0)',
      country: 'Czech Republic',
      ip: '192.25.25.1',
      mac: '1A:FF:CC:12:24:1C',
      groups: [this.groupService.groups[0], this.groupService.groups[1]],
      configs: [this.configService.configs[0], this.configService.configs[1]]
    },
    {
      name: 'PC-2',
      login: '8.3.2022 16:30:24',
      timezone: 'CET (+0)',
      country: 'Czech Republic',
      ip: '192.25.25.2',
      mac: '1A:FF:CC:12:24:1C',
      groups: [this.groupService.groups[0], this.groupService.groups[2]],
      configs: [this.configService.configs[1], this.configService.configs[2]]
    },
    {
      name: 'PC-3',
      login: '8.3.2022 16:30:24',
      timezone: 'CET (+0)',
      country: 'Czech Republic',
      ip: '192.25.25.3',
      mac: '1A:FF:CC:12:24:1C',
      groups: [this.groupService.groups[1], this.groupService.groups[2]],
      configs: []
    }
  ]

  constructor(public groupService: GroupsServiceService, public configService: ConfigsServiceService) { }

  getClients(): IClient[] {
    return this.clients;
  }

  getDetail(id: number): IClientDetail {
    return this.clientDetails[id];
  }

  remove(id: number): void {
    this.clients = this.clients.filter(x => x.id != id);
    this.clientDetails = this.clientDetails.filter((x, index) => index != id)
  }
}
