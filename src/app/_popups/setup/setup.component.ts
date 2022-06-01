import {Component, Inject, OnInit} from '@angular/core';
import {User, UsersService} from "../../services/users.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const forbidden = !regex.test(control.value);
    return forbidden ? {notEmail: {value: control.value}} : null;
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hasUpperCase = /[A-Z]+/.test(control.value);

    const hasLowerCase = /[a-z]+/.test(control.value);

    const hasNumeric = /[0-9]+/.test(control.value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && control.value.length > 6;

    return !passwordValid ? {passwordStrength: {value: control.value}}: null;
  };
}

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public users: User[], private userService: UsersService, private dialogRef: MatDialogRef<SetupComponent>) { }

  username = ""
  password = ""
  email = ""

  emailFormControl = new FormControl(this.email, [
    Validators.required,
    emailValidator(),
  ]);
  passwordFormControl = new FormControl(this.password, [
    Validators.required,
    passwordValidator(),
  ]);
  nameFormControl = new FormControl(this.username, [
    Validators.required,
  ]);

  ngOnInit(): void {
  }

  submit() {
    let user: User = {
      id: 0,
      username: this.username,
      password: this.password,
      email: this.email
    }

    this.userService.save(user).subscribe(null,null,() => this.dialogRef.close())
  }

}
