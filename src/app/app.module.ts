import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreen } from './SplashScreen/Splash.component';
import { LocalPlace } from './LocalPlace/localplace.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchReq } from 'src/app/Services/searchreq.service';
import { AgmCoreModule } from '@agm/core';
import { Maps } from './Maps/maps.component';
import { GeoLocation } from './Services/geolocation.service';
import { APIKEY } from './config.localplaces';  //Global Varibale that supplies API KEY. Go to config.localplace.ts//

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
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: APIKEY  //Global Varible for APIKEY Value
    })

  ],
  providers: [
    SearchReq,
    GeoLocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
