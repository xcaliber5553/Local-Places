import { Component } from '@angular/core';
import { Coords } from '../TypeExtensions/coords.type';
import { MouseEvent } from '@agm/core';
import { GeoLocation } from '../Services/geolocation.service';


@Component({
// tslint:disable-next-line: component-selector
    selector: 'maps',
    templateUrl: 'maps.template.html',
    styleUrls: ['maps.style.css']
})
// tslint:disable-next-line: component-class-suffix
export class Maps{

      SearchCoords: Coords;
      MyCoords: Coords;
      lat: number;
      lng: number;
        // google maps zoom level
      zoom = 15;
      // Radius of the circle in the map.
      CurrentRadius = 500;

      // initial center position for the map is the user location
      // constructor(private geoLoc: GeoLocation) {
      // }
      // ngOnInit(): void {
      //   // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //   // Add 'implements OnInit' to the class.
      //   this.MyCoords = this.geoLoc.getMyLocation();
      //   console.log(this.MyCoords);
      // }

        // initial center position for the map is the user location
      constructor() {
          if (navigator) {
          navigator.geolocation.getCurrentPosition( pos => {
              this.lng = +pos.coords.longitude;
              this.lat = +pos.coords.latitude;
            });
          }
      }

  

      mapClicked($event: MouseEvent) {
        console.log('Map Clicked!');

      }
}
