import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-clients-popup',
  templateUrl: './edit-clients-popup.component.html',
  styleUrls: ['./edit-clients-popup.component.css']
})
export class EditClientsPopupComponent implements OnInit {

  constructor() { }

  public EditOn : boolean = false;

  public iterator = Array(50).fill(0)

  public editIterator = Array(100).fill(0)

  ngOnInit(): void {
  }

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 2))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 3))
  }

  switchToEdit() {
    this.EditOn = !this.EditOn;
  }

  colCalc(): number {
    return (7)
  }

}


