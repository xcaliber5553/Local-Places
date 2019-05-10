import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let count = 0;

@Component({
    templateUrl:'./localplace.template.html',
    styleUrls: ['./localplace.style.css']
})
export class LocalPlace implements OnInit {

    constructor(private router: Router){}

    ngOnInit() {
        // do init at here for current route.
        if (count == 0){
            this.router.navigate(['LocalPlaces']);
            count = 1;
        }

    

    }
}