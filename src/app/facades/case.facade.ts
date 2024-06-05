import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {Area, TEST_AREAS} from "../model/area.model";
import {Case, TEST_CASES} from "../model/case.model";
import {User} from "../model/user.model";


@Injectable({
  providedIn: 'root',
})
export class CaseFacade {
  //private backendApi = 'http://localhost:5256/api'
  private backendApi = 'https://bonobuddyapi20240506173057.azurewebsites.net/api'

  //areas
  private areasApi = '/areas'
  private getAreasApi = this.backendApi + this.areasApi;
  private getAreaApi = this.backendApi + this.areasApi + "{id}";

  //cases
  private casesApi = '/cases/';
  private getCasesApi = this.backendApi + this.casesApi;
  private getCaseApi = this.backendApi + this.casesApi + "{id}";
  private putCaseApi = this.backendApi + this.casesApi + "{id}";
  private getUserCasesApi = this.backendApi + "/users/{id}/cases";


  constructor(private http: HttpClient) {}

  getAreas(): Area[] {
    return TEST_AREAS;
   // return this.http.get<Area[]>(this.getAreasApi);
  }

  getAreaById(id: number): Observable<Area> {
    const url = `${this.backendApi}areas/${id}`;
    return this.http.get<Area>(url);
  }

  getAllCases(): Case[] {
    return TEST_CASES;
  //  return this.http.get<Case[]>(this.backendApi + 'cases')
  }

  getUserCases(id: number) {
    return firstValueFrom(this.http.get<User>(this.getAreasApi));
  }

  addNewCase(caseDTO: Case) {
    return firstValueFrom(this.http.post<Case>(this.getAreasApi, caseDTO));
  }

  editCase(id: number, requestBody: Case) {
    return this.http.put<User>(this.putCaseApi, requestBody);
  }

  getExpertises() {
    return firstValueFrom(this.http.get<Area>(this.getAreasApi));
  }

  getExpertise(id: number) {
    return firstValueFrom(this.http.get<Area>(this.getAreaApi));
  }
}
