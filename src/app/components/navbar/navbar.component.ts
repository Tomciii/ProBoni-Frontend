import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 @Input() currentUser: User | null = null;

 constructor(private userService: UserService) {

 }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

 logout() {
   this.userService.logout();
 }
}

