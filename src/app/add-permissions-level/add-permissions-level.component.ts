import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SnackBarService } from '../services/snack-bar.service';
import { PermissionsService } from '../services/permissions.service';

import { HttpResponse } from '../interfaces/http-response';

@Component({
  selector: 'app-add-permissions-level',
  templateUrl: './add-permissions-level.component.html',
  styleUrls: ['./add-permissions-level.component.css']
})
export class AddPermissionsLevelComponent implements OnInit {
  public addPermission: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _permissions: PermissionsService,
    private dialogRef: MatDialogRef<AddPermissionsLevelComponent, any>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _snackbar: SnackBarService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public submit(): void {
    this.addPermissionLevel(this.addPermission.getRawValue().level);
  }

  private addPermissionLevel(level: string): void {
    this._permissions
    .addPermissionLevel(level)
    .subscribe(
      (data: HttpResponse) => {
        this.addPermission.reset();
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
    this.addPermission = this.formBuilder.group({
      level: new FormControl(
        '',
        Validators.required
      )
    });
  }

  public get getErrorMessage(): object {
    return {
      levelError: () => {
        if (this.status.level.hasError('required')) {
          return 'a level name is required!';
        };
      }
    }
  }

  public get status(): any {
    return this.addPermission.controls;
  }


  public closeDialog(): void {
    this.dialogRef.close();
  }
}
