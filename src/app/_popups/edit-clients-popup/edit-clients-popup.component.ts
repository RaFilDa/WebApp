import {Component, Input, OnInit} from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

interface IClient {
  name: string
  class: string
}

@Component({
  selector: 'app-edit-clients-popup',
  templateUrl: './edit-clients-popup.component.html',
  styleUrls: ['./edit-clients-popup.component.css']
})
export class EditClientsPopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public GroupName: any
  ) { }

  public EditOn : boolean = false;

  public editIterator : IClient[] = Array(100).fill(0).map((value, index) => ({name: (index+1).toString(), class: 'user_circle_not_selected'}));

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

  SaveChanges() {
    this.EditOn = !this.EditOn;
    this.editIterator = this.editIterator.map(value => (value.class == 'user_circle_add' || value.class == 'user_circle') ? ({name: value.name, class: 'user_circle'}) : ({name: value.name, class: 'user_circle_not_selected'}));
    console.log(this.editIterator)
  }

  colCalc(): number {
    return (7)
  }

  getSelected() {
    return this.editIterator.filter(value => value.class == 'user_circle');
  }

  toggleClient(index: number) {
    switch (this.editIterator[index].class)
    {
      case('user_circle_not_selected'):
        this.editIterator[index].class = 'user_circle_add';
        break;
      case('user_circle_add'):
        this.editIterator[index].class = 'user_circle_not_selected';
        break;
      case('user_circle'):
        this.editIterator[index].class = 'user_circle_remove';
        break;
      case('user_circle_remove'):
        this.editIterator[index].class = 'user_circle';
        break;
    }
  }

}


