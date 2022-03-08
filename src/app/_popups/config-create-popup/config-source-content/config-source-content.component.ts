import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISource} from "../../../services/configs-service.service";

@Component({
  selector: 'app-config-source-content',
  templateUrl: './config-source-content.component.html',
  styleUrls: ['./config-source-content.component.css']
})
export class ConfigSourceContentComponent implements OnInit {

  @Input() sources: ISource[] = [];
  @Output() sourcesChange = new EventEmitter<ISource[]>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number): void {
    this.sources = this.sources.filter((x, i) => i != index);
    this.sourcesChange.emit(this.sources);
  }

  add(path: string): void {
    this.sources = [{path: path}].concat(this.sources);
    this.sourcesChange.emit(this.sources);
  }

}
