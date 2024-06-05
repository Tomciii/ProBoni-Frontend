import {Component} from '@angular/core';
import {UserFacade} from "../../facades/user.facade";
import {ActivatedRoute, Router} from "@angular/router";
import {Case, TEST_CASES} from "../../model/case.model";
import {Status} from "../../model/casestatus.model";
import {CaseFacade} from "../../facades/case.facade";
import {Area, TEST_AREAS} from "../../model/area.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-caseform',
  templateUrl: './caseform.component.html',
  styleUrls: ['./caseform.component.css']
})
export class CaseformComponent {
  submitDTO: Case = {title:'',description:'', status: Status.Angelegt};
  constructor(private userFacade: UserFacade, private boniFacade: CaseFacade, private router: Router, private route: ActivatedRoute, private userService: UserService) {}

  areas: Area[] = [];
  selectedArea: number = -1;
  ngOnInit(): void {
    this.areas = TEST_AREAS;

  /*  this.boniFacade.getAreas().subscribe(areas => {
      console.log('Areas:', areas);
      this.areas = areas;
    }, error => {
      console.error('Error fetching areas:', error);
    }
    ); */
  }

  async submitCase() {
    try {
      const newCase: Case = {
        id: TEST_CASES.length + 1,
        title: this.submitDTO.title,
        description: this.submitDTO.description,
        status: Status.Offen,
        creationDate: new Date(),
        lastModified: new Date(),
        clientID: 1,
        isPublic: true,
        hoursSpent: 0
      };

      TEST_CASES.push(newCase);

      this.router.navigate(['/client'], { relativeTo: this.route });
    } catch (error) {
      console.error('Error submitting case:', error);
      this.router.navigate(['/client'], { relativeTo: this.route });
    }
  }
}
