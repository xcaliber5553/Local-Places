import { Component } from '@angular/core';
import { Coords } from '../TypeExtensions/coords.type';
import { MouseEvent, LatLngLiteral } from '@agm/core';
import { GeoLocation } from '../Services/geolocation.service';
import { SearchReq } from '../Services/searchreq.service';


@Component({
// tslint:disable-next-line: component-selector
    selector: 'maps',
    templateUrl: 'maps.template.html',
    styleUrls: ['maps.style.css']
})
// tslint:disable-next-line: component-class-suffix
export class Maps {

      SearchCoords: Coords;
      MyCoords: Coords;
      lat: number;
      lng: number;
                // google maps zoom level
      zoom = 15;
                // Radius of the circle in the map.
      SearchRadius = 500;

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
      constructor(private SearchApi: SearchReq) {
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

      radiusChanged($event: number) {
        this.SearchRadius = $event;
      }

      centerChanged($event: LatLngLiteral) {
        console.log($event.lat , 'lat-lng', $event.lng);
        // when Center Change api is in use, Use the below code to store the values
        // this.SearchCoords.lat = $event.lat;
        // this.SearchCoords.lng = $event.lng;
      }

}
