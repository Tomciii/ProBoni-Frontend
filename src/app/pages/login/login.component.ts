import {Component} from '@angular/core';
import {Login} from "../../model/login.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDTO: Login = {email:'',password:''};
  constructor(private router: Router,  private route: ActivatedRoute, private userService: UserService) {}

  async login() {

    try {
      this.userService.login(this.loginDTO.email, this.loginDTO.password)

      if(this.loginDTO.email === 'client' || this.loginDTO.email === 'user' || this.loginDTO.email === 'testclient' || this.loginDTO.email === 'testuser') { //ToDo
        this.router.navigate(['/client'], { relativeTo: this.route });
      }
      else if (this.loginDTO.email === 'lawyer' || this.loginDTO.email === 'testlawyer') {
        this.router.navigate(['/lawyer'], {relativeTo: this.route});
      }
    } catch (error) {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
  }

}
