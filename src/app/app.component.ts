import { Component, OnInit } from '@angular/core';

import { AppDetailsService } from './services/app-details.service';

import { HttpResponse } from './interfaces/http-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _appDetails: AppDetailsService) { }

  ngOnInit () {
    this.getAppDetails()
    .subscribe(
      (data: HttpResponse) => {

    },
    (error: HttpResponse: HttpResponse) => {

    });
  }

  private getAppDetails() {
    this._appDetails.getDetails();
  }
}
