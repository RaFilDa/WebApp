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

}
