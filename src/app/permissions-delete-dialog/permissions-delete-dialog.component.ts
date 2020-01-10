import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { SnackBarService } from '../services/snack-bar.service';
import { PermissionsService } from '../services/permissions.service';

import { HttpResponse } from '../interfaces/http-response';

@Component({
  selector: 'app-permissions-delete-dialog',
  templateUrl: './permissions-delete-dialog.component.html',
  styleUrls: ['./permissions-delete-dialog.component.css']
})
export class PermissionsDeleteDialogComponent implements OnInit {

  constructor(
    private _permissions: PermissionsService,
    private dialogRef: MatDialogRef<PermissionsDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackbar: SnackBarService
  ) { }

  ngOnInit() {
    this.dialogRef.removePanelClass([
      'mat-dialog-container',
      'cdk-overlay-pane'
    ]);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public performAction(): void {
    this.deletePermissionLevel(this.data.id);
  }

  public deletePermissionLevel(id: string): void {
    this._permissions
    .deletePermissionLevel(id)
    .subscribe(
      (data: HttpResponse) => {
        console.log({data});
        this.close();
        this._snackbar.showSnackBar(data.message);
      },
      (error: HttpResponse) => {
        console.log({error});
        this.close();
        this._snackbar.showSnackBar(error.error.message);
      }
    );
  }
}
