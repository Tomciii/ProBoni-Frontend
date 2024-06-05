import {Component} from '@angular/core';
import {UserFacade} from "../../facades/user.facade";
import {ActivatedRoute, Router} from "@angular/router";
import {Register} from "../../model/register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerDTO: Register = {
    id: 0,
    email: '',
    userName: '',
    firstName: '',
    lastName: '',
    address: '',
    creationDate: new Date(),
    dateOfBirth: '',
    advmCode: '',
    organisationId: null,
    karma: 0,
    casesClosed: 0,
    areaId: 0,
    lastModified: new Date(),
    password: '',
    isLawyer: false,
    phoneNumber: ''
  };
  constructor(private userFacade: UserFacade, private router: Router,  private route: ActivatedRoute) {}
  step: number = 1;

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  isLawyer() {
    return this.registerDTO.isLawyer;
  }

  register() {
    this.userFacade.registerUser(this.registerDTO).subscribe(
      response => {
        console.log('User registered successfully:', response);
        // Redirect to success page or any other desired action
        if(this.registerDTO.isLawyer) {
          this.userFacade.registerUser(this.registerDTO)
          this.router.navigate(['/login'], {relativeTo: this.route});
        }
        else {
          this.router.navigate(['/login'], { relativeTo: this.route });
        }
      },
      error => {
        console.error('Error registering user:', error);
        // Handle registration error, show error message to user, etc.
      }
    );
  }
}
