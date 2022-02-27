import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

export interface UserData {
  name: string;
  email: string;
}


const USER_DATA: UserData[] = [
  {name: 'admin', email: 'admin@email.com'},
  {name: 'foo', email: 'foo@email.com'},
  {name: 'admin3', email: 'admin3@email.com'},
];


@Component({
  selector: 'app-settings-users-content',
  templateUrl: './settings-users-content.component.html',
  styleUrls: ['./settings-users-content.component.css']
})

export class SettingsUsersContentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'email'];
  dataSource = USER_DATA;

}
