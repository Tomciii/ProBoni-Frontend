import {Component, Input, OnInit} from '@angular/core';
import {Status} from "../../model/casestatus.model";
import {Location} from "@angular/common";
import {UserService} from "../../service/user.service";
import {Lawyer} from "../../model/lawyer.model";
import {Client} from "../../model/client.model";
import {Case, OPEN_TEST_CASE, TEST_CASES} from "../../model/case.model";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-casepage',
  templateUrl: './casepage.component.html',
  styleUrls: ['./casepage.component.css']
})
export class CasepageComponent  implements OnInit {
  case: Case | undefined;
  currentUser: Client | null;
  currentLawyer: Lawyer | null;

  user: User | null = null;
  constructor(private location: Location, private router: Router, private userService: UserService,   private route: ActivatedRoute) {
    this.currentUser = this.userService.getTestClient();
    this.currentLawyer = this.userService.getTestLawyer();
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    this.userService.initUser();
  }

  @Input() status: Status = Status.InBearbeitung;
  @Input() area = 'Verbraucherrecht';
  cancel() {
    if (this.case) {
      this.case.status = Status.Storniert;
    }
  }

  accept() {
    if (this.case) {
      this.case.status = Status.InBearbeitung;
      this.case.lawyerID = 1;
    }
  }

  back(): void {
    console.log(this.user)
    if (this.isLawyer()) {
      this.router.navigate(['/lawyer'], {relativeTo: this.route});
    } else {
      this.router.navigate(['/client'], {relativeTo: this.route});
    }
  }

  loadCase(caseID: number) {
    if (caseID === 1) {
      this.case = OPEN_TEST_CASE;
    } else {
      this.case = TEST_CASES.find(caseItem => caseItem.id === caseID);
    }
  }

ngOnInit(): void {
  this.userService.currentUser.subscribe(user => {
    this.currentUser = user;
  });

  this.userService.initUser();

    this.route.params.subscribe(params => {
      const caseID = +params['id'];
      this.loadCase(caseID);
    });
  }

  isOpen(): boolean {
    return this.case?.status === Status.Offen;
  }

  isLawyer(): boolean {
    return this.user?.email === 'michaelbauer@kanzleibauer.com';
  }
}
