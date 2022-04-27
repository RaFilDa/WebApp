import { Component, OnInit } from '@angular/core';
import {User, UsersService} from "../../services/users.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.css']
})
export class AddUserPopupComponent implements OnInit {

  constructor(private userService: UsersService, private dialogRef: MatDialogRef<AddUserPopupComponent>) { }

  username = ""
  password = ""
  email = ""

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
