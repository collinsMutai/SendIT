import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';

const appRoutes:Routes = [
  {path: '', component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'', loadChildren:()=>
    import('../admin/admin.module').then((m)=>m.AdminModule),
    canLoad: [(route:Route, segments: UrlSegment[])=> true]
},
  {path:'user', component:UserdashboardComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
