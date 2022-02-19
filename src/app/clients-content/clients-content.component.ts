import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-content',
  templateUrl: './clients-content.component.html',
  styleUrls: ['./clients-content.component.css']
})
export class ClientsContentComponent implements OnInit {

  public iterator = Array(50).fill(0)

  constructor() { }

  ngOnInit(): void {
  }

}
