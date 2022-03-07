import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-source-content',
  templateUrl: './config-source-content.component.html',
  styleUrls: ['./config-source-content.component.css']
})
export class ConfigSourceContentComponent implements OnInit {

  public sources: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 5; i++)
    {
      this.sources.push('C:\\Users\\user1\\Documents')
    }
  }

  delete(index: number): void {
    this.sources = this.sources.filter((x, i) => i != index);
  }

  add(path: string): void {
    this.sources = [path].concat(this.sources);
  }

}
