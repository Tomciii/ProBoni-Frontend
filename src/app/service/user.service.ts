import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../model/user.model";
import {Lawyer} from "../model/lawyer.model";
import {Client} from "../model/client.model";
import {UserFacade} from "../facades/user.facade";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  private testLawyer: Lawyer = {
    id: 1,
    email: "michaelbauer@kanzleibauer.com",
    firstName: "Michael",
    lastName: "Bauer",
    address: "456 Rechtsstraße",
    advmCode: "XYZ123",
    organisationId: 123,
    karma: 100,
    casesClosed: 50,
    areaId: 789,
    creationDate: new Date(),
    dateOfBirth: new Date("1985-05-15"),
    lastModified: new Date()
  };

  private testClient: Client = {
    id: 1,
    email: "paulaschneider@gmail.com",
    firstName: "Paula",
    lastName: "Schneider",
    address: "123 Teststraße",
    creationDate: new Date(),
    dateOfBirth: new Date("1990-01-01"),
    lastModified: new Date()
  };

  constructor(private http: HttpClient, private userFacade: UserFacade) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public initUser() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user: User = JSON.parse(userData);
      this.currentUserSubject.next(user);
    }
  }

  public getTestUser(): User {
      return this.testClient;
     // return this.testLawyer;
  }

  public getTestClient(): Client {
    return this.testClient;
  }

  public getTestLawyer(): Client {
    return this.testLawyer;
  }

  login(username: string, password: string) {

    if (username === 'client' || username === 'user') {
      localStorage.setItem('currentUser', JSON.stringify(this.testClient));
      this.currentUserSubject.next(this.testClient);
      return;
    } else if (username === 'lawyer') {
      localStorage.setItem('currentUser', JSON.stringify(this.testLawyer));
      this.currentUserSubject.next(this.testLawyer);
      return;
    }

    return this.http.post<any>(`/api/authenticate`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
