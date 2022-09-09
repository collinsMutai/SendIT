import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 0.0236,
      lng: 37.9062
  };
  zoom = 8;
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
