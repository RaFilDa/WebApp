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
  @Output() invalidChange =  new EventEmitter<boolean>()

  @Input() invalid: boolean = false

  ngOnInit(): void {
  }

  change() {
    this.weekdaysChange.emit(this.weekdays)
    this.daysChange.emit(this.days)
    this.minutesChange.emit(this.minutes)
    this.hoursChange.emit(this.hours)
    this.monthsChange.emit(this.months)
    let tmp = "0 " + this.minutes + " " + this.hours + " " + this.days + " " + this.months + " " + this.weekdays
    let regex = new RegExp("^\\s*($|#|\\w+\\s*=|(\\?|\\*|(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?(?:,(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?)*)\\s+(\\?|\\*|(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?(?:,(?:[0-5]?\\d)(?:(?:-|\\/|\\,)(?:[0-5]?\\d))?)*)\\s+(\\?|\\*|(?:[01]?\\d|2[0-3])(?:(?:-|\\/|\\,)(?:[01]?\\d|2[0-3]))?(?:,(?:[01]?\\d|2[0-3])(?:(?:-|\\/|\\,)(?:[01]?\\d|2[0-3]))?)*)\\s+(\\?|\\*|(?:0?[1-9]|[12]\\d|3[01])(?:(?:-|\\/|\\,)(?:0?[1-9]|[12]\\d|3[01]))?(?:,(?:0?[1-9]|[12]\\d|3[01])(?:(?:-|\\/|\\,)(?:0?[1-9]|[12]\\d|3[01]))?)*)\\s+(\\?|\\*|(?:[1-9]|1[012])(?:(?:-|\\/|\\,)(?:[1-9]|1[012]))?(?:L|W)?(?:,(?:[1-9]|1[012])(?:(?:-|\\/|\\,)(?:[1-9]|1[012]))?(?:L|W)?)*|\\?|\\*|(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?(?:,(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?)*)\\s+(\\?|\\*|(?:[0-6])(?:(?:-|\\/|\\,|#)(?:[0-6]))?(?:L)?(?:,(?:[0-6])(?:(?:-|\\/|\\,|#)(?:[0-6]))?(?:L)?)*|\\?|\\*|(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?(?:,(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?)*)(|\\s)+(\\?|\\*|(?:|\\d{4})(?:(?:-|\\/|\\,)(?:|\\d{4}))?(?:,(?:|\\d{4})(?:(?:-|\\/|\\,)(?:|\\d{4}))?)*))$")
    this.invalid = !regex.test(tmp)
    if((this.days == "*" && this.weekdays == "*") || (this.days == "?" && this.weekdays == "?"))
      this.invalid = true
    this.invalidChange.emit(this.invalid)
  }

}
