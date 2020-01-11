import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { FormService } from '../services/form.service';
import { SnackBarService } from '../services/snack-bar.service';
import { DialogService } from '../services/dialog.service';

import { FormTitle } from '../interfaces/form-details';
import { HttpResponse } from '../interfaces/http-response';

import { AddFormPropsComponent } from '../add-form-props/add-form-props.component';
import { DialogConfig } from '../interfaces/dialog-config';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  public addForm: FormGroup;

  public action = <string>'add';
  private value: string = this.data.add ? 'add' : 'edit';
  private formDetails: FormTitle;

  constructor(
    public dialogRef: MatDialogRef<AddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private _forms: FormService,
    private _snackbar: SnackBarService,
    private _dialog: DialogService
  ) { }

  ngOnInit() {
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
          const dialogRef: MatDialogRef<AddFormPropsComponent> = this._dialog.openDialog(
            {
              add: true,
              edit: false,
              props: { title: this.formDetails.title }
            },
            AddFormPropsComponent,
            <DialogConfig>{}
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

  private initForm(): void {
    this.addForm = this.formBuilder.group({
      title: new FormControl(
        this.data.props ? this.data.props.title : '',
        Validators.required
      )
    });
  }

  public get getErrorMessage(): object {
    return {
      titleError: () => {
        if (this.status.title.hasError('required')) {
          return 'Title field can not be empty!';
        }
      }
    };
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
