import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IConfigDetail, ConfigsServiceService} from "../../services/configs-service.service";

@Component({
  selector: 'app-config-create-popup',
  templateUrl: './config-create-popup.component.html',
  styleUrls: ['./config-create-popup.component.css']
})
export class ConfigCreatePopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public idDetail: number, public configService: ConfigsServiceService) { }

  public temp: IConfigDetail = {
    name: '',
    intensity: 'Full',
    retention: 3,
    type: '',
    cron: '',
    timezone: 'UTC(+0)',
    destinations: [],
    sources: [],
  }

  ngOnInit() {
    if(this.idDetail != -1)
      this.temp = Object.assign({}, this.configService.getDetail(this.idDetail));
  }

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 3))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 5))
  }

  saveChanges(): void {
    if(this.idDetail == -1) {
      this.configService.configDetails.push(this.temp);
      this.configService.configs.push({id: this.configService.configs.length, name: this.temp.name})
    }

    this.configService.configDetails[this.idDetail] = this.temp;
  }

  public Timezones: string[] = [
    'UTC(-12)','UTC(-11)','UTC(-10)','UTC(-9)','UTC(-8)','UTC(-7)',
    'UTC(-6)','UTC(-5)','UTC(-4)','UTC(-3)','UTC(-2)','UTC(-1)',
    'UTC(+0)','UTC(+1)','UTC(+2)','UTC(+3)','UTC(+4)','UTC(+5)',
    'UTC(+6)','UTC(+7)','UTC(+8)','UTC(+9)','UTC(+10)','UTC(+11)','UTC(+12)','UTC(+13)','UTC(+14)',
    ]
}
