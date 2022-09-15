import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AuthGuardGuard } from '../Guards/auth-guard.guard';
import { UserGuard } from '../Guards/user.guard';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [UserGuard],
    component: UserdashboardComponent,
    children: [{ path: 'user', component: UserdashboardComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
