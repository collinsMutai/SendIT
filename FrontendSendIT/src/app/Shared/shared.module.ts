import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    FooterComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports:[
 FooterComponent,
 MapComponent
  ]
})
export class SharedModule { }
