import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppDetailsService } from '../services/app-details.service';
import { ApiUrlsService } from './api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private cid: string = this._appDetails.getClientId;

  constructor(
    private _http: HttpClient,
    private _apiUrls: ApiUrlsService,
    private _appDetails: AppDetailsService
  ) {}

  public addPermissionRecords(body: {fid: string, id: string}): Observable<object> {
    const _url = <string>(
      `${this._apiUrls.permissionUrls.addPermissionRecord}/${this.getClientName}`
    );

    return this._http.post<Object>(_url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'body',
      responseType: 'json'
    });
  }

  public listPermissionRecords(id: string): Observable<object> {
    const _url = <string>(
      `${this._apiUrls.permissionUrls.listPermissionRecords}/${this.getClientName}/${id}`
    );

    return this._http.get<Object>(_url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'body',
      responseType: 'json'
    });
  }

  public deletePermissionLevel(id: string): Observable<object> {
    const _url = <string>(
      `${this._apiUrls.permissionUrls.deletePermissionLevel}/${this.getClientName}/${id}`
    );

    return this._http.delete<Object>(_url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'body',
      responseType: 'json'
    });
  }

  public addPermissionLevel(level: string): Observable<object> {
    const _url = <string>(
      `${this._apiUrls.permissionUrls.addPermissionLevel}/${this.getClientName}`
    );

    return this._http.post<Object>(
      _url,
      { level },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'body',
        responseType: 'json'
      }
    );
  }

  public get listPermissionLevels(): Observable<object> {
    const _url = <string>(
      `${this._apiUrls.permissionUrls.listPermissionLevels}/${this.getClientName}`
    );

    return this._http.get<Object>(_url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'body',
      responseType: 'json'
    });
  }

  private get getClientName(): string {
    return <string>this._appDetails.getName;
  }
}
