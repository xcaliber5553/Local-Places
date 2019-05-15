import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SearchReq {
        ReqURL: string;
        SearchRadius: number;

        constructor(private http: HttpClient) {
          this.SearchRadius = 500;
        }
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

        private extractData(res: Response) {
          const body = res;
          return body || {};
        }

        public GetResults(lat: number, lng: number): Observable<any> {

          // Set the http options
      // tslint:disable-next-line: max-line-length
          const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST', 'Access-Control-Allow-Origin': 'http://localhost:4200' });

          // tslint:disable-next-line: max-line-length
          this.ReqURL = '../assets/Json/SampleData.json';
      // tslint:disable-next-line: max-line-length
          // API URL = https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lng + '&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyBQiw8r5TCe-6kRNRtuUh7iK6W1e37CNyo
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

        public searchRadius(Diff: number): any {
          this.SearchRadius = +Diff;
          return this.SearchRadius;
        }

}
