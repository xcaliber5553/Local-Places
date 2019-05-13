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
  constructor(private http: HttpClient) { }
  ReqURL: string;
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
    const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Methods": "GET, POST", "Access-Control-Allow-Origin": "http://localhost:4200" });

    // tslint:disable-next-line: max-line-length
    this.ReqURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lng + '&radius=1500&type=restaurant&keyword=cruise&key=ApiKeyContactAdmin';
    //Substitute API For system to function

    return this.http.get(this.ReqURL, { headers: httpOptions });


    /* Version Alpha 
        return this.http.get(this.ReqURL, httpOptions).pipe(
          map(this.extractData),
          catchError(this.handleError)
        );
    */
  }
}
