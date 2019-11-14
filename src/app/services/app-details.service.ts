import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

import {ApiUrlsService} from './api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class AppDetailsService {

  constructor(
    private _httpClient: HttpClient,
    private _apiUrls: ApiUrlsService
  ) { }

  getDetails(): Observable<Object> {
    const _url: string = this._apiUrls.serviceUrls;
    return this._httpClient.get<Object>('_url', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }
}
