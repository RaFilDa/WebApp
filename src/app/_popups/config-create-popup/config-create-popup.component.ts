import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ConfigsServiceService, IConfig, IDestination, ISource} from "../../services/configs-service.service";

@Component({
  selector: 'app-config-create-popup',
  templateUrl: './config-create-popup.component.html',
  styleUrls: ['./config-create-popup.component.css']
})
export class ConfigCreatePopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public idDetail: number, public configService: ConfigsServiceService) { }

  public config: IConfig = {
    id: 0,
    name: '',
    userID: 1,
    backupFrequency: 'd',
    retentionSize: 3,
    packageSize: 3,
    backupType: 1,
    fileType: false,
    cron: '',
    timeZone: 'UTC(+0)'
  }

  public destinations: IDestination[] = []
  public sources: ISource[] = []

  ngOnInit() {
    if(this.idDetail != -1)
    {
      this.configService.GetConfig(this.idDetail).subscribe(x => this.config = x)
      this.configService.getDestinations(this.idDetail).subscribe(x => this.destinations = x)
      this.configService.getSources(this.idDetail).subscribe(x => this.sources = x)
    }
  }

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 3))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 5))
  }

  saveChanges(): void {
  }

  public Timezones: string[] = [
    'UTC(-12)','UTC(-11)','UTC(-10)','UTC(-9)','UTC(-8)','UTC(-7)',
    'UTC(-6)','UTC(-5)','UTC(-4)','UTC(-3)','UTC(-2)','UTC(-1)',
    'UTC(+0)','UTC(+1)','UTC(+2)','UTC(+3)','UTC(+4)','UTC(+5)',
    'UTC(+6)','UTC(+7)','UTC(+8)','UTC(+9)','UTC(+10)','UTC(+11)','UTC(+12)','UTC(+13)','UTC(+14)',
    ]
}
