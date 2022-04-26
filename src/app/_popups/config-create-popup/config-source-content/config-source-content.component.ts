import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISource} from "../../../services/configs-service.service";

@Component({
  selector: 'app-config-source-content',
  templateUrl: './config-source-content.component.html',
  styleUrls: ['./config-source-content.component.css']
})
export class ConfigSourceContentComponent implements OnInit {

  @Input() configID = 0;

  @Input() sources: ISource[] = [];
  @Output() sourcesChange = new EventEmitter<ISource[]>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(source: ISource): void {
    this.sources = this.sources.filter(x => x != source)
    this.sourcesChange.emit(this.sources)
  }

  add(path: string): void {
    let tmp: ISource = {
      id: 0,
      configID: this.configID,
      path: path
    }

    this.sources.push(tmp);
  }

}
