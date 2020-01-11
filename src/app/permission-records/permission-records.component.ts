import {
  Component,
  OnInit,
  OnChanges,
  Input,
  DoCheck,
  AfterContentChecked
} from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { PermissionsService } from '../services/permissions.service';
import { DialogService } from '../services/dialog.service';

import { HttpResponse } from '../interfaces/http-response';
import { PermissionRecordsProps } from '../interfaces/permissions';

import { RecordDeleteDialogComponent } from '../record-delete-dialog/record-delete-dialog.component';

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

  constructor(
    private _permissions: PermissionsService,
    private _dialog: DialogService
    ) { }

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

  public deleteRecord(id: string): void {
    // show delete Dialog
    const dialogRef: MatDialogRef<
      RecordDeleteDialogComponent,
      any
      > = this._dialog.openDialog(
        { id },
        RecordDeleteDialogComponent,
        {
          width: '450px',
          height: '240px',
          minWidth: '450px',
          hasBackdrop: true
        }
      );

    dialogRef
      .afterClosed()
      .subscribe(() => this.getPermissionRecords(this.id));
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
