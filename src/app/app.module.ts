import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppDetailsService } from './services/app-details.service';
import {ApiUrlsService} from './services/api-urls.service';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AppDetailsService,
    ApiUrlsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
