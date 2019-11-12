import { Component } from '@angular/core';
import { MarkerService } from './services/markerservice';
import { Marker } from './model/marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['agm-map {height: 4000px; /* height is required */ }']
})
export class AppComponent {
  title = 'Landmark Remark';
  latitude :any;
  longitude:any;
  markers:Marker[]=[];
  _markerService:MarkerService
  constructor(markerService:MarkerService){
    this._markerService= markerService;
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.longitude = +pos.coords.longitude;
        this.latitude = +pos.coords.latitude;
        this.markers=this._markerService.addMarker(this.markers,+pos.coords.latitude,+pos.coords.longitude,1,'Your Current Location');
      });
    }
  }
  addMarker(lat: number, lng: number) {
    var remark = prompt("Enter your remark.");
    var m:Marker = {
      Lattitude:lat,
      Longitude:lng,
      Alpha:2,
      Remark:remark
    };
    console.log(JSON.stringify(m));
    var promise = this._markerService.addMark(m);
    promise.subscribe((data:Marker)=>console.log(data));



    this.markers= this._markerService.addMarker(this.markers,lat,lng,1,remark);
  }
}
