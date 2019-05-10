import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './Splash.template.html',
    styleUrls: ['./Splash.style.css']
})
export class SplashScreen implements OnInit{

constructor(private router: Router){}
    ngOnInit()
    {
      setTimeout(() => {
        this.router.navigate(['yourlocalplace']);
      }, 2000);  //2 Second Splash
    }
}