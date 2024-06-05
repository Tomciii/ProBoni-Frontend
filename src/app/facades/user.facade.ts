import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {Login} from "../model/login.model";
import {Register} from "../model/register.model";
import {User} from "../model/user.model";
import {Organisation} from "../model/organisation.model";


@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  private backendAPI = 'http://localhost:5256/api'
  //private backendAPI = 'https://bonobuddyapi20240506173057.azurewebsites.net/api';

  //Users
  private userAPI = "/users/";
  private login = this.backendAPI + this.userAPI + 'login';
  private register = this.backendAPI + this.userAPI + 'register';
  private user = this.backendAPI + this.userAPI + '{id}';
  private lawyer = this.backendAPI + "/lawyer-infos/" + '{id}';

  //Organisation

  //Cases
  private organisationAPI = "/organisations/";
  private postOrganisation = this.backendAPI + this.organisationAPI + 'create-organisation';
  private getLeaderboard = this.backendAPI + this.organisationAPI + 'getLeaderboard';
  private getInformations = this.backendAPI + this.organisationAPI + 'getInformations';


  constructor(private http: HttpClient) {}

  loginUser(loginDTO: Login) {
    return firstValueFrom(this.http.post<Login>(this.login, loginDTO));
  }

  registerUser(registerDTO: Register){
    return this.http.post<Register>(this.register, registerDTO);
  }

  getUser(){
    return firstValueFrom(this.http.get<User>(this.user));
  }

  addOrganisation(organisationDTO: Organisation){
    return this.http.post<Register>(this.postOrganisation, organisationDTO);
  }

  getOrganisationsLeaderboard() {
    return firstValueFrom(this.http.get<User>(this.getLeaderboard));
  }

  getLawyer(advm: string){
    return firstValueFrom(this.http.get<User>(this.lawyer));
  }

}
