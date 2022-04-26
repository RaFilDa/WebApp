import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {ConfigsServiceService, IDestination} from "../../../services/configs-service.service";

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

  @Input() configID: number = 0;

  @Input() destinations: IDestination[] = [];
  @Output() destinationsChange = new EventEmitter<IDestination[]>();

  constructor() { }

  async ngOnInit() {
    await this.delay(1);
    this.renderButton = true;
  }

  delete(dest: IDestination): void {
    this.destinations = this.destinations.filter(x => x != dest)
    this.destinationsChange.emit(this.destinations)
  }

  add(): void {
    let dest: IDestination = {
      id: 0,
      configID: this.configID,
      type: "Loc",
      path: "",
      username: "",
      password: "",
      ip: ""
    }

    this.destinations.push(dest)
  }
}
