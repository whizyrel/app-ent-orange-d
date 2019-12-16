import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiUrlsService } from './api-urls.service';
import { AppDetailsService } from '../services/app-details.service';

import { FormTitle, FormDetails } from '../interfaces/form-details';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private cid: string = this._appDetails.getClientId;

  constructor(
    private _http: HttpClient,
    private _apiUrls: ApiUrlsService,
    private _appDetails: AppDetailsService
  ) { }itle

  public deleteFormProperty(id: string): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.deleteProperty}/${this.getClientName}/${id}`;

    return this._http.delete<Object>(_url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  public editFormProperty(details: any): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.editProperty}/${this.getClientName}`;

    return this._http.patch<Object>(_url, details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  public addFormProperty(details: any): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.addProperty}/${this.getClientName}`;

    return this._http.post<Object>(_url, details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  public changeFormPermission(details: FormTitle): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.changePermission}/${this.getClientName}`;

    return this._http.patch<Object>(_url, details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  public editFormTitle(details: FormTitle): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.edit}/${this.getClientName}`;

    return this._http.patch<Object>(_url, details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  public deleteFormTitle(id: string): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.delete}/${this.getClientName}/${id}`;

    return this._http.delete<Object>(_url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  public addFormTitle(details: FormTitle): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.add}/${this.getClientName}`;

    return this._http.post<Object>(_url, details, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  public getFormDetails(fid: string, ft: string): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.listProperties}/${this.cid}/${ft}/${fid}`;

    return this._http.get<Object>(_url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  public get getList(): Observable<Object> {
    const _url: string = `${this._apiUrls.formUrls.list}/${this.getClientName}`;

    return this._http.get<Object>(_url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  private get getClientName(): string {
    return this._appDetails.getName;
  }
}
