import { Component, OnInit } from '@angular/core';

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
  public panelOpenStateConfig : boolean = false;

  constructor() { }

  async ngOnInit() {
    await this.delay(1);
    this.renderButton = true;
  }

  openConfig() {
    this.panelOpenStateConfig = !this.panelOpenStateConfig;
  }

}
