import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cron-content',
  templateUrl: './cron-content.component.html',
  styleUrls: ['./cron-content.component.css']
})
export class CronContentComponent implements OnInit {

  constructor() { }

  @Input() weekdays: string = ""
  @Output() weekdaysChange = new EventEmitter<string>()
  @Input() days: string = ""
  @Output() daysChange = new EventEmitter<string>()
  @Input() minutes: string = ""
  @Output() minutesChange = new EventEmitter<string>()
  @Input() hours: string = ""
  @Output() hoursChange = new EventEmitter<string>()
  @Input() months: string = ""
  @Output() monthsChange = new EventEmitter<string>()

  ngOnInit(): void {
  }

  change() {
    this.weekdaysChange.emit(this.weekdays)
    this.daysChange.emit(this.days)
    this.minutesChange.emit(this.minutes)
    this.hoursChange.emit(this.hours)
    this.monthsChange.emit(this.months)
  }

}
