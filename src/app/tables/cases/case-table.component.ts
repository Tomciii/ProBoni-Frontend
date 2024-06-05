import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Case, TEST_CASES} from "../../model/case.model";

export interface PeriodicElement {
  titel: string;
  id: number;
  status: string;
}

const ELEMENT_DATA: Case[] = TEST_CASES;

@Component({
  selector: 'cases-table',
  templateUrl: './case-table.component.html',
  styleUrls: ['./case-table.component.css']
})
export class CaseTableComponent {
  displayedColumns: string[] = [ 'titel', 'status'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<Case>();
  constructor(private router: Router) {}
  navigateToCase(row: any) {
    // Extract the ID from the row data
    const caseId = row.id;
    // Navigate to the /case/:id route
    this.router.navigate(['/case', caseId]);
  }
}
