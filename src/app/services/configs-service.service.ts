import { Injectable } from '@angular/core';

export interface IConfig {
  id: number,
  name: string
}

export interface IConfigDetail {
  name: string
  intensity: string
  retention: number
  package?: number
  type: string
  cron: string
  timezone: string
  destinations: IDestination[]
  sources: ISource[]
}

export interface IDestination {
  id?: number
  type: string,
  path?: string,
  ip?: string,
  login?: string,
  password?: string,
}

export interface ISource {
  id?: number
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigsServiceService {

  public configs = [
    {id: 0, name: 'FTP'},
    {id: 1, name: 'Documents Backup Local'},
    {id: 2, name: 'Remote System'},
    {id: 3, name: 'FTP/Local Hybrid'}
  ]

  public configDetails: IConfigDetail[] = [
    {
      name: this.configs[0].name,
      intensity: 'Full',
      retention: 5,
      type: 'raw',
      cron: '10/10/10',
      timezone: 'UTC(+0)',
      destinations: [
        {type: 'FTP', ip: '192.25.25.1'}
      ],
      sources: [
        {path: 'C:\\'},
        {path: 'D:\\'},
      ],
    },
    {
      name: this.configs[1].name,
      intensity: 'Incremental',
      retention: 12,
      package: 5,
      type: 'zip',
      cron: '10/10/10',
      timezone: 'UTC(+1)',
      destinations: [
        {type: 'FTP', ip: '192.25.25.1'},
        {type: 'Local', path: 'C:\\Backup'}
      ],
      sources: [
        {path: 'C:\\'}
      ],
    },
    {
      name: this.configs[2].name,
      intensity: 'Full',
      retention: 5,
      type: 'raw',
      cron: '10/10/10',
      timezone: 'UTC(+2)',
      destinations: [
        {type: 'FTP', ip: '192.25.25.1'}
      ],
      sources: [
        {path: 'C:\\'}
      ],
    },
    {
      name: this.configs[3].name,
      intensity: 'Full',
      retention: 5,
      type: 'raw',
      cron: '10/10/10',
      timezone: 'UTC(+3)',
      destinations: [
        {type: 'FTP', ip: '192.25.25.1'}
      ],
      sources: [
        {path: 'C:\\'}
      ],
    },
  ]

  getDetail(id: number): IConfigDetail {
    return this.configDetails[id];
  }

  constructor() { }

}
