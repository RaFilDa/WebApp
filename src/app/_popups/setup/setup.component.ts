import { Component, OnInit } from '@angular/core';
import {User, UsersService} from "../../services/users.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(public userService: UsersService, private dialogRef: MatDialogRef<SetupComponent>) { }

  public username: string = ""
  public password: string = ""
  public email: string = ""

  ngOnInit(): void {
  }

  submit() {
    let user: User = {
      id: 0,
      username: this.username,
      password: this.password,
      email: this.email
    }

    this.userService.save(user).subscribe(null, null, () => this.dialogRef.close())
  }

}
