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
  public temp: IClient[] = [];

  ngOnInit(): void {
    // for (let i = 1;i <= 100;i++)
    // {
    //   this.selection.push({name: 'Testík ' + i, selected: false})
    // }
    this.selection.push({name: 'a 1', selected: false})
    this.selection.push({name: 'a 2', selected: false})
    this.selection.push({name: 'a 3', selected: false})
    this.selection.push({name: 'a 4', selected: false})
    this.selection.push({name: 'a 5', selected: false})
    this.selection.push({name: 'b 1', selected: false})
    this.selection.push({name: 'b 2', selected: false})
    this.selection.push({name: 'c 3', selected: false})
    this.selection.push({name: 'd 1', selected: false})
    this.selection.push({name: 'c 5', selected: false})
    this.selection.push({name: 'a 11', selected: false})
    this.selection.push({name: 'a ', selected: false})
    this.sort(this.selection);
  }

  widthCalc(): number {
    return (window.innerWidth - (window.innerWidth / 2))
  }

  heightCalc(): number {
    return (window.innerHeight - (window.innerHeight / 3))
  }

  toggleSelection(index: number) {
    this.selection[index].selected = !this.selection[index].selected;
  }

  toggleSelected(index: number) {
    this.selected[index].selected = !this.selected[index].selected;
  }

  setSelection() {
    this.temp = this.selection.filter(x => x.selected).map(x => x = {name: x.name, selected: false}).slice();
    Array.prototype.push.apply(this.selected,this.temp);
    this.sort(this.selected);
    this.selection = this.selection.filter(x => !x.selected).slice();
  }

  unsetSelected() {
    this.temp = this.selected.filter(x => x.selected).slice().map(x => x = {name: x.name, selected: false}).slice();
    Array.prototype.push.apply(this.selection,this.temp);
    this.sort(this.selection);
    this.selected = this.selected.filter(x => !x.selected).slice();
  }

  sort(arr: IClient[]) {
    arr.sort((a,b) => a.name.localeCompare(b.name));
    arr.sort((a,b) => {
      if(this.getNumber(a.name) > this.getNumber(b.name) && this.getWithoutNumber(a.name) == this.getWithoutNumber(b.name))
        return 1;
      if(this.getNumber(a.name) < this.getNumber(b.name) && this.getWithoutNumber(a.name) == this.getWithoutNumber(b.name))
        return -1;
      return 0;
    });
  }

  getNumber(s: string): number {
    let temp = ''
    for(let i = 0; i < s.length; i++)
    {
      if(s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58)
        temp += s.charAt(i)
    }
    return Number(temp);
  }

  getWithoutNumber(s: string): string {
    let temp = ''
    for(let i = 0; i < s.length; i++)
    {
      if(s.charCodeAt(i) <= 47 || s.charCodeAt(i) >= 58)
        temp += s.charAt(i)
    }
    return temp;
  }

  colCalc(): number {
    return (7)
  }

}


