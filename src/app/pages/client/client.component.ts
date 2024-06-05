import {Component} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Client} from "../../model/client.model";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  currentUser: Client | null;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getTestClient();
  }
}
