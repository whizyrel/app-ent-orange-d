import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SnackBarService } from '../services/snack-bar.service';

import { HttpResponse } from '../interfaces/http-response';
import { PermissionsService } from '../services/permissions.service';

@Component({
  selector: 'app-record-delete-dialog',
  templateUrl: './record-delete-dialog.component.html',
  styleUrls: ['./record-delete-dialog.component.css']
})
export class RecordDeleteDialogComponent implements OnInit {
  constructor(
    private _permissions: PermissionsService,
    private _snackbar: SnackBarService,
    private dialogRef: MatDialogRef<RecordDeleteDialogComponent, any>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    this.dialogRef.removePanelClass([
      'cdk-overlay-pane',
      'mat-dialog-container'
    ]);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public performAction(): void {
    this.deleteForm(this.data.id);
  }

  public deleteForm(id: string) {
    this._permissions
      .deletePermissionRecord(id)
      .subscribe(
      (data: HttpResponse) => {
        this.close();
        this._snackbar.showSnackBar(data.message);
      },
      (error: HttpResponse) => {
        console.log({ error });
        this._snackbar.showSnackBar(error.error.message);
      }
    );
  }
}
