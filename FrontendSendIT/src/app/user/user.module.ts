import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

@NgModule({
  declarations: [UserdashboardComponent],
  imports: [CommonModule, SharedModule, UserRoutingModule],
})
export class UserModule {}
