import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashScreen } from './SplashScreen/Splash.component';
import { LocalPlace } from './LocalPlace/localplace.component';

const routes: Routes = [
  { path: 'LocalPlaces', component: SplashScreen },
  { path: 'yourlocalplace' , component: LocalPlace },
  {path:'', redirectTo :'yourlocalplace', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {scrollPositionRestoration: 'enabled', 
    anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
