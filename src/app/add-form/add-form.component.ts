import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { FormService } from '../services/form.service';
import { PermissionsService } from '../services/permissions.service';
import { SnackBarService } from '../services/snack-bar.service';
import { DialogService } from '../services/dialog.service';

import { FormTitle } from '../interfaces/form-details';
import { HttpResponse } from '../interfaces/http-response';

import { AddFormPropsComponent } from '../add-form-props/add-form-props.component';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  public addForm: FormGroup;

  public action: string = 'add';
  private value: string = this.data.add ? 'add' : 'edit';
  public permissions: any = [];
  private formDetails: FormTitle;
  private pid: string;

  constructor(
    public dialogRef: MatDialogRef<AddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private _forms: FormService,
    private _permissions: PermissionsService,
    private _snackbar: SnackBarService,
    private _dialog: DialogService
  ) { }

  ngOnInit() {
    // this.getPermissionsList();
    this.action = this.capFirstLetter(this.value);

    this.initForm();
    this.dialogRef.removePanelClass(['cdk-overlay-pane', 'mat-dialog-container']);
    this.dialogRef.addPanelClass(['__dialog-container']);
  }

  public submit(): void {
    this.formDetails = this.addForm.getRawValue();

    if (this.data.add) {
      this._forms
      .addFormTitle(this.formDetails).subscribe(
        (data: HttpResponse) => {
          this._snackbar
          .showSnackBar(data.message);

          // add permissions, add form properties dialog
          // open add form-properties dialog
          const dialogRef: MatDialogRef<AddFormPropsComponent> = this._dialog
          .openDialog(
            {
              add: true, edit: false,
              props: {title: this.formDetails.title}
            },
            AddFormPropsComponent
          );

          dialogRef
          .afterClosed()
          .subscribe(
            () => this.closeDialog()
          );

          return;
        },
        (error: HttpResponse) => {
           console.log({error});

           this._snackbar
           .showSnackBar(error.error.message);
           return;
        }
      );
    }

    if (this.data.edit && this.status.title.touched) {
      this.changeFormTitle();
    }
  }

  private changePermission (): void {
    // this._forms
    // .changeFormPermission({
    //   // permissionId: this.pid,
    //   title: this.addForm.getRawValue().title
    // })
    // .subscribe(
    //   (data: HttpResponse) => {
    //     this.closeDialog();
    //     this._snackbar
    //     .showSnackBar(data.message);
    //   },
    //   (error: HttpResponse) => {
    //     console.log({error});
    //     this._snackbar
    //     .showSnackBar(error.error.message);
    //   }
    // );
  }

  private changeFormTitle (): void {
    this._forms
    .editFormTitle({
      id: this.data.props.id, title: this.addForm.getRawValue().title
    })
    .subscribe(
      (data: HttpResponse) => {
        this.closeDialog();
        this._snackbar
        .showSnackBar(data.message);
      },
      (error: HttpResponse) => {
        console.log({error});
        this._snackbar
        .showSnackBar(error.error.message);
      }
    );
  }

  private getPermissionsList(): void {
    this._permissions
    .listPermissions.subscribe(
      (data: HttpResponse) => {
        this.permissions = data.permissions;
      },
      (error: HttpResponse) => {
        console.log({error});
        this._snackbar
        .showSnackBar(error.error.message);
      }
    );
  }

  public setPermissionId(id: string): void {
    this.pid = id;
  }

  private initForm(): void {
    this.addForm = this.formBuilder.group({
      title: new FormControl(
        this.data.props ? this.data.props.title : '',
        Validators.required
      )
      // ,
      // permissionLevel: new FormControl(
      //   this.data.props ? this.data.props.pl : '',
      //   Validators.required
      // )
    });
  }

  public get getErrorMessage(): object {
    return {
      titleError: () => {
        if (this.status.title.hasError('required')) {
          return 'Title field can not be empty!';
        };
      },
      permissionLevelError: () => {
        if (this.status.permissionLevel.hasError('required')) {
          return 'Select permission level';
        }
      }
    }
  }

  public get status(): any {
    return this.addForm.controls;
  }

  private capFirstLetter(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.substr(1).toLowerCase()}`;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
