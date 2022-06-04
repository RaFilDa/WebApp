import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddUserPopupComponent} from "../../../_popups/add-user-popup/add-user-popup.component";
import {User, UsersService} from "../../../services/users.service";
import {ConfirmationPopupComponent} from "../../../_popups/confirmation-popup/confirmation-popup.component";
import {EditUserPopupComponent} from "../../../_popups/edit-user-popup/edit-user-popup.component";

@Component({
  selector: 'app-settings-users-content',
  templateUrl: './settings-users-content.component.html',
  styleUrls: ['./settings-users-content.component.css']
})

export class SettingsUsersContentComponent implements OnInit {

  constructor(public dialog: MatDialog, private userService: UsersService) { }

  public users: User[] = []

  public isLoading: boolean = true

  ngOnInit(): void {
    this.refresh()
  }

  refresh(): void {
    this.userService.GetAll().subscribe(x => this.users = x, null, () => {this.isLoading = false;this.dataSource = this.users;})
  }

  openDialog() {
    this.dialog.open(AddUserPopupComponent, {data: this.users}).afterClosed().subscribe(() => {this.isLoading = true;this.refresh()});
  }

  deleteUser(user: User) {
    this.dialog.open(ConfirmationPopupComponent).afterClosed().subscribe(result => {
      if(!result)
        return
      this.isLoading = true;
      this.userService.DeleteUser(user.id).subscribe(null, null, () => this.refresh())
    })
  }

  editUser(user: User) {
    this.dialog.open(EditUserPopupComponent, {data: {users: this.users, user: user}}).afterClosed().subscribe(() => {this.isLoading = true;this.refresh()});
  }

  displayedColumns: string[] = ['username', 'email'];
  dataSource: User[] = [];
}
