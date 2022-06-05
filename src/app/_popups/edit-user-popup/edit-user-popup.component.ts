import {Component, Inject, OnInit} from '@angular/core';
import {User, UsersService} from "../../services/users.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

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

    return !passwordValid ? {passwordStrength:true}: null;
  };
}

export function nameValidator(users: User[], user: User): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const used = users.some(x => x.username == control.value && x.username != user.username);
    return used ? {usedName: {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-edit-user-popup',
  templateUrl: './edit-user-popup.component.html',
  styleUrls: ['./edit-user-popup.component.css']
})
export class EditUserPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {users: User[], user: User}, private userService: UsersService, private dialogRef: MatDialogRef<EditUserPopupComponent>) { }

  username = ""
  password = ""
  email = ""
  Saved = false;

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
    nameValidator(this.data.users, this.data.user),
  ]);

  ngOnInit(): void {
    this.email = this.data.user.email
    this.username = this.data.user.username
  }

  submit() {
    let user: User = {
      id: this.data.user.id,
      username: this.username,
      password: this.password,
      email: this.email
    }

    this.Saved = true;

    this.userService.update(user).subscribe(null,null,() => this.dialogRef.close())
  }

}

