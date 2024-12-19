import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
import { LoginComponent } from './login/login.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'' , redirectTo: '/home' , pathMatch: 'full' }, // path par defaut
  {path:'residence' , component:ResidenceComponent},
  {path:'login' , component:LoginComponent},
  {path:'addRes' , component:AddResidenceComponent},
  {path:'details/:id' , component:DetailResidenceComponent}, // route parametre
  {path:'updateR/:id' , component:AddResidenceComponent}, // route parametre
  {path:'**' , component: NotFoundComponent}, // path not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
