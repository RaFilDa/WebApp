import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-day-selection-content',
  templateUrl: './day-selection-content.component.html',
  styleUrls: ['./day-selection-content.component.css']
})
export class DaySelectionContentComponent implements OnInit {

  @Input() weekdays: string[] = []
  @Output() weekdaysChange = new EventEmitter<string[]>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.weekdays)
  }

  isToggled(day: string): boolean {
    return this.weekdays.filter(x => x == day).length == 1
  }

  toggle(day: string): void {
    if(!this.isToggled(day))
      this.weekdays.push(day)
    else
    {
      this.weekdays = this.weekdays.filter(x => x != day)
      this.weekdaysChange.emit(this.weekdays)
    }
  }

}
