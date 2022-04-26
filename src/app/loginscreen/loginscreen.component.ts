import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {filter} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionsService} from "../services/sessions.service";

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  public form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private service: SessionsService) { }

  ngOnInit(): void {
  this.form = this.fb.group({
        login: [ '', Validators.required ],
        password: [ '', Validators.required ],
      });
  }

  public login(): void {
      this.service.login(this.form.value).pipe(
        filter(result => result === true)
      ).subscribe(() => this.router.navigate(['/dashboard']));
    }
  }
