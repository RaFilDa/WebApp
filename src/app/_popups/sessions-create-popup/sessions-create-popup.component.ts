import { Component, OnInit } from '@angular/core';
import {SessionsService} from "../../services/sessions.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-sessions-create-popup',
  templateUrl: './sessions-create-popup.component.html',
  styleUrls: ['./sessions-create-popup.component.css']
})
export class SessionsCreatePopupComponent implements OnInit {

  constructor(public sessions: SessionsService, public matRef: MatDialogRef<SessionsCreatePopupComponent>) { }

  public name: string = ""
  public error: boolean = false;

  ngOnInit(): void {
  }

  submit(): void {
    if(this.name == "")
    {
      this.error = true;
      return
    }
    this.sessions.AddSession(this.name).subscribe(null, null, () => this.matRef.close());
  }
}
