import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogConfig } from '../interfaces/dialog-config';
import { ComponentType } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  // private defaultConfig: DialogConfig = {
  //   height: '80%',
  //   hasBackdrop: true,
  //   width: '350px',
  //   minWidth: '320px',
  //   minHeight: 'fit-content',
  // };
  constructor(
    private dialog: MatDialog
  ) { }

  public openDialog(
    data: any,
    comp,
    {
      height= '80%',
      hasBackdrop= true,
      width= '350px',
      minWidth= '320px',
      minHeight= 'fit-content',
    }: DialogConfig
  ): MatDialogRef < any, any > {
    const dialogRef: MatDialogRef<any, any> = this.dialog.open(comp, {
          height, width, minWidth, minHeight,
          hasBackdrop,
          data
        });

    return dialogRef;
  }

  public closeDialog(comp) {

  }
}
