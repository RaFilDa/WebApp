import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ReportsPopupComponent} from "../../_popups/reports-popup/reports-popup.component";
import {IReportDetail, ReportsServiceService} from "../../services/reports-service.service";

@Component({
  selector: 'app-reports-content',
  templateUrl: './reports-content.component.html',
  styleUrls: ['./reports-content.component.css']
})
export class ReportsContentComponent implements OnInit {

  public searchExpression = '';
  public errorOnly = false;
  public backupType = '';

  public reports: IReportDetail[] = [];

  constructor(public dialog: MatDialog, private reportsService: ReportsServiceService) {}

  openDialog(message: string) {
    this.dialog.open(ReportsPopupComponent, {data: message});
  }

  ngOnInit(): void {
    this.reportsService.getReports().subscribe(x => {this.reports = x; console.log(this.reports)})
  }

  displayedColumns: string[] = ['date', 'name', 'mac', 'backup', 'state', 'button'];

  filterData(): IReportDetail[] {

    let filteredData: IReportDetail[] = this.reports;

    if(this.errorOnly)
      filteredData = filteredData.filter(x => x.state);

    if(this.backupType != "")
      filteredData = filteredData.filter(x => x.backup == this.backupType)

    filteredData = filteredData.filter(x =>
      x.name.toLowerCase().includes(this.searchExpression.toLowerCase()) ||
      x.mac.toLowerCase().includes(this.searchExpression.toLowerCase())
    );
    return filteredData;
  }
}
