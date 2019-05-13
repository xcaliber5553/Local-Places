import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreen } from './SplashScreen/Splash.component';
import { LocalPlace } from './LocalPlace/localplace.component';
import { AgmCoreModule } from '@agm/core';
import { Maps } from './Maps /maps.component';
@NgModule({
  declarations: [
    AppComponent,
    SplashScreen,
    LocalPlace,
    Maps
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYShFmxemn04U5ZPuuCEVWuHSkB-URXS4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
