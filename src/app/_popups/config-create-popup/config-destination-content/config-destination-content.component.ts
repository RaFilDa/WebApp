import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import { IDestination} from "../../../services/configs-service.service";

@Component({
  selector: 'app-config-destination-content',
  templateUrl: './config-destination-content.component.html',
  styleUrls: ['./config-destination-content.component.css']
})
export class ConfigDestinationContentComponent implements OnInit {

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  renderButton: boolean = false;

  @Input() destinations: IDestination[] = [];
  @Output() destinationsChange = new EventEmitter<IDestination[]>();

  constructor() { }

  async ngOnInit() {
    await this.delay(1);
    this.renderButton = true;
  }

  delete(index: number): void {
    this.destinations = this.destinations.filter((x, i) => i != index);
    this.destinationsChange.emit(this.destinations);
  }

  add(): void {
    this.destinations = [{type: 'FTP'}].concat(this.destinations);
    this.destinationsChange.emit(this.destinations);
  }
}
