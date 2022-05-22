import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router'
import {filter, timeout} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionsService} from "../services/sessions.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  public AlfredCounter: number = 0;

  public ShowAlfred: boolean = false;

  public IsLogging: boolean = false;

  public errorMessage: string = ""

  public darkmode: boolean = false;
  public form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              public service: SessionsService) { }

  ngOnInit(): void {
    this.IsLogging = false;
    this.darkmode = this.service.loadMode()
  this.form = this.fb.group({
        login: [ '', Validators.required ],
        password: [ '', Validators.required ],
      });
  }

  addCounter() {
    if (this.AlfredCounter == 5)
    {
      this.ShowAlfred = true;
    }
    else
    {
      this.AlfredCounter += 1;
    }
  }

  switch() {
    this.darkmode = !this.darkmode
    this.service.saveMode(this.darkmode)
  }

  private errorCheck(e: HttpErrorResponse) {
    if(e.status == 0)
      this.errorMessage = "Failed to connect to API!"
    else
      this.errorMessage = e.error
  }

  public login(): void {
    this.IsLogging = true;
    this.service.login(this.form.value).subscribe(() => this.router.navigate(['/dashboard']),(e) => {this.errorCheck(e); this.IsLogging = false;},() => this.IsLogging = false)
  }
}
