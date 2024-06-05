import {Component, OnInit} from '@angular/core';
import {Lawyer} from "../../model/lawyer.model";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentLawyer: Lawyer | null;
  currentUser: User | null = null;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getTestClient();
    this.currentLawyer = this.userService.getTestLawyer();
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    this.userService.initUser();
  }
}
