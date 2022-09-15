import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './Shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { OrderEffectsService } from './Redux/Effects/OrderEffects';
import { OrderReducer } from './Redux/Reducer/OrderReducer';
import { GoogleMapsModule } from '@angular/google-maps';
import { NotfoundComponent } from './notfound/notfound.component';
import { ErrorComponent } from './error/error.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
     SignupComponent, 
     LoginComponent, 
     NotfoundComponent, ErrorComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [LottieModule.forRoot({ player: playerFactory })],
    SharedModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
