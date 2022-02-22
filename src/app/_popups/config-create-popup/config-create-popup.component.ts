import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-config-create-popup',
  templateUrl: './config-create-popup.component.html',
  styleUrls: ['./config-create-popup.component.css']
})
export class ConfigCreatePopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public typeOfBackup : string = 'Full';

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 3))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 5))
  }

}
