import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {

  url: string = environment.url;

  constructor(private http: HttpClient) { }

  saveUser(user: User){
    return this.http.post(this.url + '/user', user);
  }

  updateUser(user: User){
    return this.http.put(this.url + '/user', user);
  }

  getUsers(){
    return this.http.get<User[]>(this.url + '/user');
  }

  getById(id: number){
    return this.http.get<User>(this.url + '/user/' + id);
  }
}
