import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule, HashLocationStrategy, LocationStrategy, NgFor} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AboutComponent} from "./pages/about/about.component";
import {HomeComponent} from "./pages/home/home.component";
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientComponent } from './pages/client/client.component';
import { LawyerComponent } from './pages/lawyer/lawyer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { FooterComponent } from './components/footer/footer.component';
import { CaseformComponent } from './pages/caseform/caseform.component';
import {CaseTableComponent} from "./tables/cases/case-table.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import { CasepageComponent } from './pages/casepage/casepage.component';
import { LawyersComponent } from './tables/lawyers/lawyers.component';
import {CookiebannerComponent} from "./components/cookiebanner/cookiebanner.component";
import {MatCardModule} from "@angular/material/card";
import { GalleryComponent } from './components/gallery/gallery.component';
import { OpencasepageComponent } from './pages/opencasepage/opencasepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    CaseTableComponent,
    ClientComponent,
    LawyerComponent,
    ProfileComponent,
    ImpressumComponent,
    CookiebannerComponent,
    PrivacypolicyComponent,
    DatenschutzComponent,
    FooterComponent,
    CaseformComponent,
    CasepageComponent,
    LawyersComponent,
    GalleryComponent,
    OpencasepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgFor,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatCardModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
