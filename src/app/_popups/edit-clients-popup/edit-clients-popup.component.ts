import {Component, Input, OnInit} from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

interface IClient {
  name: string
  selected: boolean
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

  public selection: IClient[] = [];
  public selected: IClient[] = [];

  ngOnInit(): void {
    for (let i = 1;i <= 100;i++)
    {
      this.selection.push({name: 'Testík ' + i, selected: false})
    }
  }

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 2))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 3))
  }

  toggleSelect(index: number) {
    this.selection[index].selected = !this.selection[index].selected;
  }

  setSelection() {
    this.selected = this.selection.filter(x => x.selected).slice();
    this.selection = this.selection.filter(x => !x.selected).slice();
  }

  colCalc(): number {
    return (7)
  }

}


