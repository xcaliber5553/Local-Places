import { Injectable } from '@angular/core';
import { Coords } from '../TypeExtensions/coords.type';

@Injectable()

export class GeoLocation {
    MyCoords: Coords;
    lng: number;
    lat: number;

    public getMyLocation(): any {
        if (navigator) {
            return navigator.geolocation.getCurrentPosition( pos => {
                this.lng = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
               });

            }
    }
}
