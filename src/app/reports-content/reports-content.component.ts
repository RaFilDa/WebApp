import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-content',
  templateUrl: './reports-content.component.html',
  styleUrls: ['./reports-content.component.css']
})
export class ReportsContentComponent implements OnInit {

  public iterator = Array(100).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

}
