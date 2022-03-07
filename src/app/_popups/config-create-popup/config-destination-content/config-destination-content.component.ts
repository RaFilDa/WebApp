import { Component, OnInit } from '@angular/core';

export interface IDestination {
  type: string,
  path?: string,
  ip?: string,
  login?: string,
  password?: string,
}

@Component({
  selector: 'app-config-destination-content',
  templateUrl: './config-destination-content.component.html',
  styleUrls: ['./config-destination-content.component.css']
})
export class ConfigDestinationContentComponent implements OnInit {

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  renderButton: boolean = false;

  public destinations: IDestination[] = []

  constructor() { }

  async ngOnInit() {
    await this.delay(1);
    this.renderButton = true;

    this.destinations.push({type: 'FTP', ip: '192.25.25.254', login: 'username', password: 'secret'});
    this.destinations.push({type: 'FTP', ip: '192.25.25.252', login: 'username2', password: 'secret'});
    this.destinations.push({type: 'Local', path: 'C:/Users/user/documents/backup'});
    this.destinations.push({type: 'Remote', path: 'C:/Users/user/documents/backup'});
  }

}
