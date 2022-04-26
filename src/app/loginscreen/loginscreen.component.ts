import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {filter, timeout} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionsService} from "../services/sessions.service";

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  public IsLogging: boolean = false;

  public WrongCredentials: boolean = false;

  public form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private service: SessionsService) { }

  ngOnInit(): void {
    this.IsLogging = false;
    this.WrongCredentials = false;
  this.form = this.fb.group({
        login: [ '', Validators.required ],
        password: [ '', Validators.required ],
      });
  }

  public login(): void {
    this.IsLogging = true;
      this.service.login(this.form.value).pipe(
        filter(result => result === true)
      ).subscribe(() => this.router.navigate(['/dashboard']));
      setTimeout(() => {this.IsLogging = false}, 200)
    this.WrongCredentials = true;
    }
  }
