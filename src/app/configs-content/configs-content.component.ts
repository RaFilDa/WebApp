import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configs-content',
  templateUrl: './configs-content.component.html',
  styleUrls: ['./configs-content.component.css']
})
export class ConfigsContentComponent implements OnInit {

  public configs: string[] = [
    'FTP/LOCAL', 'LOCAL', 'Rem. Folder', 'Local/Rem.Folder/Local',
    'FTP/LOCAL', 'LOCAL', 'Rem. Folder', 'Local/Rem.Folder/Local',
    'FTP/LOCAL', 'LOCAL', 'Rem. Folder', 'Local/Rem.Folder/Local',
    'FTP/LOCAL', 'LOCAL', 'Rem. Folder', 'Local/Rem.Folder/Local',
    'FTP/LOCAL', 'LOCAL', 'Rem. Folder', 'Local/Rem.Folder/Local'
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
