import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SuccessComponent } from './success/success.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';



@NgModule({
  declarations: [
    FooterComponent,
    MapComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    GooglePlaceModule
  ],
  exports:[
 FooterComponent,
 MapComponent
  ]
})
export class SharedModule { }
