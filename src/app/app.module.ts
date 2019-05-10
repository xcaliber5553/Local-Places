import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreen } from './SplashScreen/Splash.component';
import { LocalPlace } from './LocalPlace/localplace.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreen,
    LocalPlace
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
