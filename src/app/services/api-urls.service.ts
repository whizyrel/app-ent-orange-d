import { Injectable } from '@angular/core';

import { FormUrls } from '../interfaces/form-urls';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  constructor() { }

  get serviceUrls(): string {
    return serviceUrl;
  }

  get formUrls(): FormUrls {
    return formUrls;
  }
}

const _url: string = `http://localhost:5556`;
const serviceUrl: string = `${_url}/sv/d`; // service/details
const formUrls: FormUrls = {
  list: `${_url}/f/l`,
  add: `${_url}/f/a`,
  edit: `${_url}/f/e`,
  delete: `${_url}/f/d`,
  changePermission: `${_url}/f/p/c`,
  listPermissions: `${_url}/f/p/l`,
  addPermission: `${_url}/f/p/a`,
  deletePermission: `${_url}/f/p/d`,
  addProperties: `${_url}/f/a/p`,
  editProperties: `${_url}/f/e/p`,
  listProperties: `${_url}/f/l/p`, // query
  deleteProperties: `${_url}/f/d/p`
};
