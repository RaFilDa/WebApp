import { Component, OnInit } from '@angular/core';
import {newArray} from "@angular/compiler/src/util";

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
