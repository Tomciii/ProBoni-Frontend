import { Component } from '@angular/core';
import {Router} from "@angular/router";

export interface PeriodicElement {
  id: number;
  name: string;
  fachbereich: string;
  punkte: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Markus Hofreiter', fachbereich: 'Zivilrecht', punkte: 34},
  {id: 2, name: 'Johanna Weiss', fachbereich: 'Verbraucherrecht', punkte: 33},
  {id: 3, name: 'Stefan Hofmann', fachbereich: 'Datenschutzrecht', punkte: 32},
  {id: 4, name: 'Lukas Veit', fachbereich: 'Datenschutzrecht', punkte: 31},
  {id: 5, name: 'Bernhard Schwartz', fachbereich: 'Insolvenzrecht', punkte: 30},
  {id: 6, name: 'Katharina Richter', fachbereich: 'Zivilrecht', punkte: 25},
  {id: 7, name: 'Augustus Berger', fachbereich: 'Nachbarschaftsrecht', punkte: 24},
  {id: 8, name: 'Johannes Neumann', fachbereich: 'Vereinsrecht', punkte: 12},
];
@Component({
  selector: 'lawyers-table',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.css']
})
export class LawyersComponent {
  displayedColumns: string[] = ['id', 'name', 'fachbereich', 'punkte'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor(private router: Router) {}
}
