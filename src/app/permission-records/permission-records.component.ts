import {
  Component,
  OnInit,
  OnChanges,
  Input,
  DoCheck,
  AfterContentChecked
} from '@angular/core';

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
  implements OnInit, OnChanges, DoCheck, AfterContentChecked {
  @Input() id: string;
  @Input() stat: boolean;
  // tslint:disable-next-line: no-input-rename
  @Input('level') permissionLevel: string;

  public records: Array<PermissionRecordsProps>;
  public assignees: string;
  public mocks: Number[] = [1, , , , , , , , , , , 12];

  constructor(private _permissions: PermissionsService) {}

  ngOnInit() {}
  ngDoCheck(): void {  }

  ngAfterContentChecked(): void {
    if (this.stat) {
      this.getPermissionRecords(this.id);
    }
  }

  ngOnChanges() {
    if (this.id !== undefined) {
      // get list
      this.getPermissionRecords(this.id);
    }
  }

  private getPermissionRecords(id: string): void {
    this._permissions.listPermissionRecords(id).subscribe(
      (data: HttpResponse) => {
        data.hasOwnProperty('records')
          ? (this.records = [])
          : (this.records = data.rows);

        this.assignees =
          this.records.length !== 0
            ? this.records.map(cur => cur.forms.join(', ')).join(', ')
            : '';
      },
      (error: HttpResponse) => {
        console.log({ error });
      }
    );
  }
}
