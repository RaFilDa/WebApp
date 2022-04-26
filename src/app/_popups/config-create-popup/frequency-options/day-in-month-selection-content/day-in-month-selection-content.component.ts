import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-day-in-month-selection-content',
  templateUrl: './day-in-month-selection-content.component.html',
  styleUrls: ['./day-in-month-selection-content.component.css']
})
export class DayInMonthSelectionContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.days)
    for(let day of this.days)
      this.daysB[day-1] = true;
  }

  @Input() days: number[] = [];
  @Output() daysChange = new EventEmitter<number[]>()
  public daysB: boolean[] = Array(31).fill(false);

  isToggled(index: number) {
    return this.daysB[index];
  }

  toggleButton(index: number) {
    this.daysB[index] = !this.daysB[index];
    if(this.daysB[index])
      this.days.push(index+1);
    else
    {
      this.days.splice(this.days.indexOf(index+1),1);
      this.daysChange.emit(this.days);
    }
  }

}
