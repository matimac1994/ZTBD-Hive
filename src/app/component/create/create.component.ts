import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: User = new User();
  users: User[] = [];
  error: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  processForm(user: User) {
    if (user.id !== undefined){
      this.userService.updateUser(user).subscribe(
        u => {
          user = u;
          this.user = new User();
        },
        e => this.error = e.message
      )
    } else {
      this.userService.saveUser(user).subscribe(
        u => {
          this.users.push(u);
          this.user = new User();
        },
        e => this.error = e.message
      )
    }

  }

  deleteUser(u: User) {
    this.userService.deleteUserById(u.id).subscribe(
      s => this.getUsers(),
      e => this.error = e.message
    )
  }

  private getUsers() {
    this.userService.getUsers().subscribe(
      s => this.users = s,
      e => this.error = e.message
    )
  }

  editUser(u: User) {
    this.user = u;
  }

}
