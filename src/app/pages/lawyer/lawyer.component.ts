import {Component} from '@angular/core';
import {Lawyer} from "../../model/lawyer.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css']
})
export class LawyerComponent {

  currentLawyer: Lawyer | null;

  constructor(private userService: UserService) {

    this.currentLawyer = this.userService.getTestLawyer();
  }
}
