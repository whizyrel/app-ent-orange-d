import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FormService } from '../services/form.service';
import { SnackBarService } from '../services/snack-bar.service';

import { HttpResponse } from '../interfaces/http-response';

@Component({
  selector: 'app-delete-form-prop-dialog',
  templateUrl: './delete-form-prop-dialog.component.html',
  styleUrls: ['./delete-form-prop-dialog.component.css']
})
export class DeleteFormPropDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteFormPropDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _forms: FormService,
    private _snackbar: SnackBarService
  ) { }

  ngOnInit() {
    this.dialogRef.removePanelClass(['cdk-overlay-pane', 'mat-dialog-container']);
  }

  public performAction(): void {
    this.deleteProperty(this.data.id);
  }

  private deleteProperty(id: string): void {
    this._forms
    .deleteFormProperty(id)
    .subscribe(
      (data: HttpResponse) => {
        this._snackbar.showSnackBar(
          data.message, null,
          {
            duration: 20000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: '__mx-vw-33'
          }
        );

        this.close();
      },
      (error: HttpResponse) => {
        console.log({error});
        this._snackbar.showSnackBar(error.error.message);
        this.close();
      }
    )
  }

  public close(): void {
    this.dialogRef.close();
  }
}
