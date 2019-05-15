import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchReq } from '../Services/searchreq.service';


let count = 0;

@Component({
    templateUrl: './localplace.template.html',
    styleUrls: ['./localplace.style.css']
})
export class LocalPlace implements OnInit {

    lat: number;
    lng: number;
    result: JSON;

    constructor(private router: Router, private Request: SearchReq) {}

    ngOnInit() {
        // do init at here for current route.
        if (count == 0) {
            this.router.navigate(['LocalPlaces']);
            count = 1;
        }

    }

    fetch() {
          // Hardcoded Lat and Lng has to be Retrived from Map at Mouse click.
          this.lat = -33.8670522;
          this.lng = 151.1957362;
          this.Request.GetResults(this.lat, this.lng).subscribe(
            data => {
            console.log(data);
            this.result = data;
            },
            err => {
            console.log(err);
            }
        );
    }


}
