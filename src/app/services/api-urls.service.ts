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

const serviceUrl = '';
