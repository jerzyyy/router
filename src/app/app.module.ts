import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './component/detail/detail/detail.component';
import { HomeComponent } from './component/home/home/home.component';
import {RouterModule} from '@angular/router';
import { FormationComponent } from './component/formation/formation.component';
import { ConnaissancesComponent } from './component/connaissances/connaissances.component';
import { LoggedInGuardGuard } from './logginGuard';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    FormationComponent,
    ConnaissancesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggedInGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
