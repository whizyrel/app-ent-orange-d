import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { PermissionsService } from '../services/permissions.service';

import { HttpResponse } from '../interfaces/http-response';

@Component({
  selector: 'app-permission-records',
  templateUrl: './permission-records.component.html',
  styleUrls: [
    '../forms/forms.component.css',
    '../list/list.component.css',
    '../permissions/permissions.component.css',
    './permission-records.component.css'
  ]
})
export class PermissionRecordsComponent implements OnInit,
OnChanges {
  @Input() id: string;

  constructor(
    private _permissions: PermissionsService
  ) { }

  ngOnInit() {
    console.log({id: this.id});
  }

  ngOnChanges() {
    if (
      this.id !== undefined
      ) {
      // get list
      this.getPermissionRecords();
    }
  }

  private getPermissionRecords(): void {
    // this._permissions
  }
}
