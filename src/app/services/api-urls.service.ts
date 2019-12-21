import { Injectable } from '@angular/core';

import { FormUrls } from '../interfaces/form-urls';
import { PermissionsUrls } from '../interfaces/permissions-urls';

@Injectable({
  providedIn: "root"
})
export class ApiUrlsService {
  constructor() {}

  public get serviceUrls(): string {
    return serviceUrl;
  }

  public get formUrls(): FormUrls {
    return formUrls;
  }

  public get permissionUrls(): PermissionsUrls {
    return permissionsUrls;
  }
}

const _url: string = `http://localhost:5556`;
const serviceUrl: string = `${_url}/sv/d`; // service/details
const formUrls: FormUrls = {
  list: `${_url}/f/l`,
  add: `${_url}/f/a`,
  edit: `${_url}/f/e`,
  delete: `${_url}/f/d`,
  addProperty: `${_url}/f/a/p`,
  editProperty: `${_url}/f/e/p`,
  listProperties: `${_url}/f/l/p`, // query
  deleteProperty: `${_url}/f/d/p`
};
const permissionsUrls: PermissionsUrls = {
  changePermissionLevel: `${_url}/p/lv/c`,
  listPermissionLevels: `${_url}/p/lv/l`,
  addPermissionLevel: `${_url}/p//lv/a`,
  deletePermissionLevel: `${_url}/p/lv/d`,
  addPermissionRecord: `${_url}/p/pr/a`,
  listPermissionRecords: `${_url}/p/pr/l`,
  deletePermissionRecord: `${_url}/p/pr/d`
};
