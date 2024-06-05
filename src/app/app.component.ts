import { Component } from '@angular/core';
import {User} from "./model/user.model";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonoBuddy';

  currentUser: User | null;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getTestUser();
  }
}
