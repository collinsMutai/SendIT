import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuardGuard } from '../Guards/auth-guard.guard';
import { NotfoundComponent } from '../notfound/notfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AuthGuardGuard],
    canActivate: [AuthGuardGuard],
  },
  {
    path: '',
    loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo:"notfound"},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
