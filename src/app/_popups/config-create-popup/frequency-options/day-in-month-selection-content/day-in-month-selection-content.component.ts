import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-in-month-selection-content',
  templateUrl: './day-in-month-selection-content.component.html',
  styleUrls: ['./day-in-month-selection-content.component.css']
})
export class DayInMonthSelectionContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public selectedDays: number[] = [];
  public days: boolean[] = Array(31).fill(false);

  isToggled(index: number) {
    return this.days[index];
  }

  toggleButton(index: number) {
    this.days[index] = !this.days[index];
    if(this.days[index])
      this.selectedDays.push(index+1);
    else
      this.selectedDays.splice(this.selectedDays.indexOf(index+1),1);
  }

}
