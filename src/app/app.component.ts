import { Component, OnInit } from '@angular/core';

import { AppDetailsService } from './services/app-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _appDetails: AppDetailsService) { }

  ngOnInit () {
    this.getAppDetails();
  }

  private getAppDetails() {
    this._appDetails.getDetails();
  }
}
