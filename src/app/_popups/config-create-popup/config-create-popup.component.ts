import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ConfigsServiceService, IConfig, IDestination, ISource} from "../../services/configs-service.service";
import {SessionsService} from "../../services/sessions.service";

@Component({
  selector: 'app-config-create-popup',
  templateUrl: './config-create-popup.component.html',
  styleUrls: ['./config-create-popup.component.css']
})
export class ConfigCreatePopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public idDetail: number, public configService: ConfigsServiceService, public sessions: SessionsService) { }

  public config: IConfig = {
    id: 0,
    name: '',
    backupFrequency: 'd',
    retentionSize: 3,
    packageSize: 3,
    backupType: 1,
    fileType: false,
    cron: '* * * * * *',
    timeZone: 'UTC(+0)'
  }

  public time = "12:00";
  public minutes = "";
  public hours = "";
  public days: number[] = []
  public cdays: string = ""
  public weekdays: string[] = []
  public cweekdays: string = ""
  public months: string = ""

  public destinations: IDestination[] = []
  public sources: ISource[] = []

  public tmpDestinations: IDestination[] = []
  public tmpSource: ISource[] = []

  ngOnInit() {
    if(this.idDetail != -1)
    {
      this.configService.GetConfig(this.idDetail).subscribe(x => this.config = x,null, () => this.cronDisassemble())
      this.configService.getDestinations(this.idDetail).subscribe(x => this.destinations = x,null, () => this.tmpDestinations = JSON.parse(JSON.stringify(this.destinations)) as IDestination[])
      this.configService.getSources(this.idDetail).subscribe(x => this.sources = x,null, () => this.tmpSource = JSON.parse(JSON.stringify(this.sources)) as ISource[])
    }
  }

  cronDisassemble(): void {
    this.cdays = this.config.cron.split(' ')[3]
    this.time = this.config.cron.split(' ')[2] + ":" + this.config.cron.split(' ')[1]
    this.hours = this.config.cron.split(' ')[2]
    this.minutes = this.config.cron.split(' ')[1]
    this.weekdays = this.config.cron.split(' ')[5].split(',')
    this.cweekdays = this.config.cron.split(' ')[5]
    this.months = this.config.cron.split(' ')[4]
    if(this.cdays == '*')
      this.days = []
    else
      this.days = this.cdays.split(',').map(x => +x)
    if(this.weekdays[0] == '*')
      this.weekdays = []
  }

  cronAssemble(): void {
    if(this.config.backupFrequency == 'c')
    {
      this.config.cron = '0 ' + this.minutes + ' ' + this.hours + ' ' + this.cdays + ' ' + this.months + ' ' + this.cweekdays
      console.log(this.config.cron)
      return
    }

    let tmp = "0 " + this.time.split(':')[1] + " " + this.time.split(':')[0] + " "
    if(this.days.length != 0 && this.config.backupFrequency == "m")
      tmp += this.days.join(',') + " * "
    else
      tmp += "* * "
    if(this.weekdays.length != 0 && this.config.backupFrequency == "w")
      tmp += this.weekdays.join(',')
    else if(this.config.backupFrequency != "c")
      tmp += "?"
    else
      tmp += "*"
    this.config.cron = tmp
  }

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 3))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 5))
  }

  deleteConfig(): void {
    this.configService.deleteConfig(this.idDetail)
  }

  saveChanges(): void {
    this.cronAssemble()

    let config: IConfig = {
      id: this.config.id,
      name: this.config.name,
      backupFrequency: this.config.backupFrequency,
      retentionSize: this.config.retentionSize,
      packageSize: this.config.packageSize,
      backupType: this.config.backupType,
      fileType: this.config.fileType,
      cron: this.config.cron,
      timeZone: this.config.timeZone
    }

    if(this.config.id != 0)
      this.configService.updateConfig(config).subscribe(null,null,() => this.addAndDelete(config))
    else
    {
      this.configService.addConfig(config).subscribe(null, null, () => {
        this.configService.getConfigId(config.name).subscribe(x => config.id = x, null, () => this.addAndDelete(config))
      })
    }
  }

  addAndDelete(config: IConfig) {
    console.log(this.destinations)
    console.log(this.tmpDestinations)

    let delD: IDestination[] = this.destinations.filter(x => this.tmpDestinations.filter(y => y.path == x.path && x.type == y.type).length == 0)
    let addD: IDestination[] = this.tmpDestinations.filter(x => this.destinations.filter(y => y.path == x.path && x.type == y.type).length == 0)

    let delS: ISource[] = this.sources.filter(x => this.tmpSource.filter(y => y.path == x.path).length == 0)
    let addS: ISource[] = this.tmpSource.filter(x => this.sources.filter(y => y.path == x.path).length == 0)

    console.log(delD)
    console.log(addD)

    for (let dest of delD)
      this.configService.delDestination(dest);

    for (let source of delS)
      this.configService.delSource(source);

    for (let dest of addD)
    {
      dest.configID = config.id
      dest.id = 0
      if(dest.path[dest.path.length-1] != '\\')
        dest.path += '\\'
      console.log(config.id)
      this.configService.addDestination(dest);
    }

    for (let source of addS)
    {
      source.id = 0
      source.configID = config.id
      if(source.path[source.path.length-1] != '\\')
        source.path += '\\'
      this.configService.addSource(source);
    }
  }

  public Timezones: string[] = [
    'UTC(-12)','UTC(-11)','UTC(-10)','UTC(-9)','UTC(-8)','UTC(-7)',
    'UTC(-6)','UTC(-5)','UTC(-4)','UTC(-3)','UTC(-2)','UTC(-1)',
    'UTC(+0)','UTC(+1)','UTC(+2)','UTC(+3)','UTC(+4)','UTC(+5)',
    'UTC(+6)','UTC(+7)','UTC(+8)','UTC(+9)','UTC(+10)','UTC(+11)','UTC(+12)','UTC(+13)','UTC(+14)',
    ]
}
