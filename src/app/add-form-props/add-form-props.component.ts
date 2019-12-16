import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormService } from '../services/form.service';

import { SnackBarService } from '../services/snack-bar.service';

import { HttpResponse } from '../interfaces/http-response';


@Component({
  selector: 'app-add-form-props',
  templateUrl: './add-form-props.component.html',
  styleUrls: ['./add-form-props.component.css']
})
export class AddFormPropsComponent implements OnInit {
  public addFormProps: FormGroup;
  private formDetails: any;
  public action: string = this.data.add ? 'Add' : 'Edit';

  constructor(
    public dialogRef: MatDialogRef<AddFormPropsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private _forms: FormService,
    private _snackbar: SnackBarService
  ) { }

  ngOnInit() {
    console.log({d: this.data});
    this.initForm();
  }

  public submit(): void {
    this.formDetails = this.addFormProps.getRawValue();

    if (this.data.add) {
      this._forms.addFormProperty(
        {title: this.data.props.title, properties: this.formDetails}
      )
      .subscribe(
        (data: HttpResponse) => {
          console.log({data});
          this._snackbar.showSnackBar(data.message);
           // reset form field to ''
        },
        (error: HttpResponse) => {
          console.log({error});
          this._snackbar.showSnackBar(error.error.message);
        }
      );
    }

    if (this.data.edit) {
      this._forms.editFormProperty(
        {id: this.data.props.id, properties: this.formDetails}
      )
      .subscribe(
        (data: HttpResponse) => {
          console.log({data});
          this._snackbar.showSnackBar(data.message);
           // reset form field to ''
           this.addFormProps.reset();
        },
        (error: HttpResponse) => {
          console.log({error});
          this._snackbar.showSnackBar(error.error.message);
        }
      );
    }
  }

  private initForm(): void {
    this.addFormProps = this.formBuilder.group({
      key: new FormControl(
        this.data.edit ? this.data.props.key : '',
        Validators.required
      ),
      type: new FormControl(
        this.data.edit ? this.data.props.type : '',
        Validators.required
      )
    });
  }

  public get status(): any {
    return this.addFormProps.controls;
  }

  public get getErrorMessage(): object {
    return {
      keyError: () => {
        if (this.status.key.hasError('required')) {
          return 'Key field cannot be empty';
        }
      },
      typeError: () => {
        if (this.status.type.hasError('required')) {
          return 'please select a type';
        }
      }
    }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
