import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  constructor() { }

  get serviceUrls(): string {
    return serviceUrl;
  }
}

const _url = `localhost:4200/`;
const serviceUrl = `${_url}/s/d`; // service/details
