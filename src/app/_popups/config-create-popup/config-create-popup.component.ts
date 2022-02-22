import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-config-create-popup',
  templateUrl: './config-create-popup.component.html',
  styleUrls: ['./config-create-popup.component.css']
})
export class ConfigCreatePopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public selectedDays: number[] = [];
  public days: boolean[] = Array(31).fill(false);
  public typeOfBackup : string = 'Full';

  isToggled(index: number) {
    return this.days[index];
  }

  toggleButton(index: number) {
    this.days[index] = !this.days[index];
    if(this.days[index])
      this.selectedDays.push(index+1);
    else
      this.selectedDays.splice(this.selectedDays.indexOf(index+1),1)
    console.log(this.selectedDays);
  }

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 3))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 5))
  }

}
