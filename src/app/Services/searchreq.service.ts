import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coords } from '../TypeExtensions/coords.type';


@Injectable()

export class SearchReq {

      ReqURL: string;
      SSRadius = new Subject<number>();
      SSCoords = new Subject<Coords>();
      SearchCoords: Coords;
      SearchRadius: number;

      constructor(private http: HttpClient) {   }

      public GetResults() {
        this.SSCoords.subscribe(
              (SCoords: Coords) => {
                this.SearchCoords = SCoords; });
        this.SSRadius.subscribe(
              (SRadius: number) => {
                this.SearchRadius = SRadius; });
        // TEST API URL1: '../assets/Json/SampleData.json'
        // TEST API URL2 with BackEnd Server:
        // 'localhost:_back_end_portnumber_/nearbysearch/lat=-33.8670522&lng=151.1957362&radius=1500&type=resturant&keyword=Cruise'
        this.ReqURL = 'http://localhost:8000/nearbysearch/lat=-33.8670522&lng=151.1957362&radius=1500&type=resturant&keyword=Cruise';
        return this.http.get(this.ReqURL);
      }
}
