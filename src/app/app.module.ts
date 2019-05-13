import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreen } from './SplashScreen/Splash.component';
import { LocalPlace } from './LocalPlace/localplace.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchReq } from 'src/app/Services/searchreq.service';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreen,
    LocalPlace
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SearchReq],
  bootstrap: [AppComponent]
})
export class AppModule { }
