import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-content',
  templateUrl: './groups-content.component.html',
  styleUrls: ['./groups-content.component.css']
})
export class GroupsContentComponent implements OnInit {

  public groups: string[] = [
  'Users', 'Administrators', 'Management',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

