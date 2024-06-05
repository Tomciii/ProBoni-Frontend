import {Component} from '@angular/core';
import {CaseFacade} from "../../facades/case.facade";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  index: string = '';

  constructor(private artFacade: CaseFacade) {}

  login() {
  }
}
