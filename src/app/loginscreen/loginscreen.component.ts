import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {filter, timeout} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionsService} from "../services/sessions.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  public IsLogging: boolean = false;

  public errorMessage: string = ""

  public form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private service: SessionsService) { }

  ngOnInit(): void {
    this.IsLogging = false;
  this.form = this.fb.group({
        login: [ '', Validators.required ],
        password: [ '', Validators.required ],
      });
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
