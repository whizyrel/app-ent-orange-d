import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormService } from '../services/form.service';
import { SnackBarService } from '../services/snack-bar.service';

import { HttpResponse } from '../interfaces/http-response';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _forms: FormService,
    private _snackbar: SnackBarService
  ) { }

  ngOnInit() {
    this.dialogRef.removePanelClass(['cdk-overlay-pane', 'mat-dialog-container']);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public performAction(): void {
    this.deleteForm(this.data.id);
  }

  public deleteForm(id: string) {
    this._forms
    .deleteFormTitle(id)
    .subscribe(
      (data: HttpResponse) => {
        this.close();
        this._snackbar.showSnackBar(data.message);
      },
      (error: HttpResponse) => {
        console.log({error});
        this._snackbar.showSnackBar(error.error.message);
      }
    );
  }
}
