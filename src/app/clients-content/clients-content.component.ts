import { Component, OnInit } from '@angular/core';
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-clients-content',
  templateUrl: './clients-content.component.html',
  styleUrls: ['./clients-content.component.css']
})
export class ClientsContentComponent implements OnInit {

  public iterator = Array(50).fill(0)

  constructor() {}

  colCalc(): number {
    return (window.innerWidth - 200) / 190
  }

  ngOnInit(): void {
  }

}
