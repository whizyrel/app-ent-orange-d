import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { PermissionsService } from '../services/permissions.service';

import { HttpResponse } from '../interfaces/http-response';
import { PermissionRecordsProps } from '../interfaces/permissions';

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
export class PermissionRecordsComponent
  implements OnInit, OnChanges {
  @Input() id: string;

  public records: Array<PermissionRecordsProps>;
  public assignees: string;
  public mocks: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private _permissions: PermissionsService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.id !== undefined) {
      // get list
      this.getPermissionRecords(this.id);
      console.log({ id: this.id });
    }
  }

  private getPermissionRecords(id: string): void {
    this._permissions.listPermissionRecords(id).subscribe(
      (data: HttpResponse) => {
        this.records = data.records;
        this.assignees = data.records
          .map(cur => cur.forms.join(', '))
          .join(', ');
        console.log({ data, a: this.assignees });
      },
      (error: HttpResponse) => {
        console.log({ error });
      }
    );
  }
}
