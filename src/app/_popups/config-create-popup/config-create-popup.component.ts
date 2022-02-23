import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-config-create-popup',
  templateUrl: './config-create-popup.component.html',
  styleUrls: ['./config-create-popup.component.css']
})
export class ConfigCreatePopupComponent implements OnInit {

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  constructor() { }

  ngOnInit(): void {
  }
  public selectedDays: number[] = [];
  public days: boolean[] = Array(31).fill(false);
  public temp: boolean[] = Array(31).fill(false);
  public panelOpenStateConfig : boolean = false;

  isToggled(index: number) {
    return this.temp[index];
  }

  toggleButton(index: number) {
    this.temp[index] = !this.temp[index];
    if(this.temp[index])
      this.selectedDays.push(index+1);
    else
      this.selectedDays.splice(this.selectedDays.indexOf(index+1),1);
    console.log(this.selectedDays)
  }

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 3))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 5))
  }

  public Timezones: string[] = [
    'UTC(-12)','UTC(-11)','UTC(-10)','UTC(-9)','UTC(-8)','UTC(-7)',
    'UTC(-6)','UTC(-5)','UTC(-4)','UTC(-3)','UTC(-2)','UTC(-1)',
    'UTC(+0)','UTC(+1)','UTC(+2)','UTC(+3)','UTC(+4)','UTC(+5)',
    'UTC(+6)','UTC(+7)','UTC(+8)','UTC(+9)','UTC(+10)','UTC(+11)','UTC(+12)','UTC(+13)','UTC(+14)',
    ]

  openConfig() {
    this.panelOpenStateConfig = !this.panelOpenStateConfig;
  }
}
