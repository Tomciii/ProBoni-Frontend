import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./pages/admin/admin.component";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {ImpressumComponent} from "./pages/impressum/impressum.component";
import {DatenschutzComponent} from "./pages/datenschutz/datenschutz.component";
import {ClientComponent} from "./pages/client/client.component";
import {CaseformComponent} from "./pages/caseform/caseform.component";
import {LawyerComponent} from "./pages/lawyer/lawyer.component";
import {CasepageComponent} from "./pages/casepage/casepage.component";
import {OpencasepageComponent} from "./pages/opencasepage/opencasepage.component";

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'admin', component: AdminComponent},
  {path:'client', component: ClientComponent},
  {path:'client/newcase', component: CaseformComponent},
  {path:'lawyer', component:LawyerComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'case/:id', component: CasepageComponent},
  {path:'opencase/134', component: OpencasepageComponent},
  {path:'impressum', component: ImpressumComponent},
  {path:'datenschutz', component: DatenschutzComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
