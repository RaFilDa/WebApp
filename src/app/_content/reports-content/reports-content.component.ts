import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ReportsPopupComponent} from "../../_popups/reports-popup/reports-popup.component";

export interface UserData {
  date: string;
  time: string;
  name: string;
  mac: string;
  backup: string;
  state: boolean;
  button: string;
}

@Component({
  selector: 'app-reports-content',
  templateUrl: './reports-content.component.html',
  styleUrls: ['./reports-content.component.css']
})
export class ReportsContentComponent implements OnInit {

  public searchExpression = '';
  public errorOnly = false;
  public backupType = '';

  public filteredData: UserData[] = [];

  public USER_DATA: UserData[] = [];

  public iterator = Array(20).fill(0);

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ReportsPopupComponent);
  }

  ngOnInit(): void {
    for (let i = 0; i <= 50; i++) {
      this.USER_DATA.push({
        date: '6.3.2022',
        time: '17:25:25',
        name: 'User' + i.toString(),
        mac: 'A5:5B:CC:1A:23',
        backup: 'FTP',
        state: i % 2 == 0,
        button: ':)',
      })
    }

    for (let i = 51; i <= 100; i++) {
      this.USER_DATA.push({
        date: '6.3.2022',
        time: '17:25:25',
        name: 'User' + i.toString(),
        mac: 'A5:5B:CC:1A:23',
        backup: 'Local',
        state: i % 2 == 0,
        button: ':)',
      })
    }
  }

  dataSource = this.USER_DATA;
  displayedColumns: string[] = ['date', 'time', 'name', 'mac', 'backup', 'state', 'button'];

  filterData(): UserData[] {
    this.filteredData = this.USER_DATA.filter(x => x.name.toLowerCase().includes(this.searchExpression.toLowerCase()));
    if(this.errorOnly)
      this.filteredData = this.filteredData.filter(x => !x.state);

    if(this.backupType != '')
      this.filteredData = this.filteredData.filter(x => x.backup == this.backupType)

    return this.filteredData;
  }
}
