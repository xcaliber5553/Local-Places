import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import {
        HttpClient,
        HttpHeaders,
        HttpErrorResponse
       } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { APIKEY } from '../config.localplaces';
import { Coords } from '../TypeExtensions/coords.type';


@Injectable()
export class SearchReq {
      ReqURL: string;
      SSRadius = new Subject<number>();
      SSCoords = new Subject<Coords>();
      SearchCoords: Coords;
      SearchRadius: number;
      constructor(private http: HttpClient) {   }
        /*
        Function to handle error when the server return an error
        @param error
        */
      private handleError(error: HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
          }
          // return an observable with a user-facing error message
          return throwError(error);
        }

      public GetResults() {
      this.SSCoords.subscribe(
        (SCoords: Coords) => {
        this.SearchCoords= SCoords;});
      this.SSRadius.subscribe(
        (SRadius:number) => {
          this.SearchRadius= SRadius;});
      // Set the http options
      // tslint:disable-next-line: max-line-length
      const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST', 'Access-Control-Allow-Origin': 'http://localhost:4200' });
      //TEST API URL: '../assets/Json/SampleData.json'
      this.ReqURL = '../assets/Json/SampleData.json';
      // tslint:disable-next-line: max-line-length
      // tslint:disable-next-line: max-line-length
      //httpOptions is to be added to the request.
      // API URL = https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.SearchCoords.lat + ',' + this.SearchCoords.lng + '&radius=this.Seach&type=restaurant&keyword=cruise&key=' + APIKEY + '
      // Replace in URL above in Live.
      // Substitute API For system to function

       return this.http.get(this.ReqURL);


          /* Version Alpha
              return this.http.get(this.ReqURL, httpOptions).pipe(
                map(this.extractData),
                catchError(this.handleError)
              );
          */
        }

       

}
