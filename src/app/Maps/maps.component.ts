import { Component } from '@angular/core';
import { Coords } from '../TypeExtensions/coords.type';
import { MouseEvent } from '@agm/core';

@Component({
    selector: 'maps',
    templateUrl: 'maps.template.html',
    styleUrls: ['maps.style.css']
})
export class Maps{
  SearchCoords : Coords;
  // google maps zoom level
  zoom = 8;
  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;

  mapClicked($event: MouseEvent) {
    this.SearchCoords.lat =  $event.coords.lat;
    this.SearchCoords.lng = $event.coords.lng;
    console.log('Clicked Coords: ', this.SearchCoords.lat, this.SearchCoords.lng);
  }
}