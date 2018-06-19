import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  user: User;

  constructor(
    private usersService: UserService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUserById(id).subscribe(
      u => this.user = u
    );
  }
}
