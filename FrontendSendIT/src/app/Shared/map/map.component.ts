import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Icustomer } from 'src/app/interfaces/interfaces';
import * as UserActions from '../../Redux/Actions/OrdersActions'
import { getCustomers, getOrders, OrderState } from 'src/app/Redux/Reducer/OrderReducer';
import { Store } from '@ngrx/store';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private store: Store<OrderState>, private OrderService:OrderService) { }
  
  customers$ = this.store.select(getCustomers)
  ngOnInit(): void {
    let email = localStorage.getItem('email') as string
    
    this.loadCustomers()
    this.OrderService.receivedParcel(email).subscribe((res) => {
      let received = res.filter(el=>el)
      console.log(received);

      let userpos = received.map((parcel) => ({
        lat: parcel.receiverLat,
        lng: parcel.receiverLng
      }))
      let senderpos = received.map((parcel) => ({
        lat: parcel.senderLat,
        lng: parcel.senderLng
      }))
     

      this.markerPositions=senderpos.concat(userpos)
    });
  }
  loadCustomers() {
    this.store.dispatch(UserActions.LoadCustomers())
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 0.0236,
      lng: 37.9062
  };
  zoom = 6;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };
  
markerPositions: google.maps.LatLngLiteral[] = [];
addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
}
openInfoWindow(marker: MapMarker) {
  if (this.infoWindow != undefined) this.infoWindow.open(marker);
}

}
