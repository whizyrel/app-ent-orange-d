import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';


import { AddFormComponent } from '../add-form/add-form.component';
import { AddFormPropsComponent } from '../add-form-props/add-form-props.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DeleteFormPropDialogComponent } from '../delete-form-prop-dialog/delete-form-prop-dialog.component';
import { AddPermissionsLevelComponent } from '../add-permissions-level/add-permissions-level.component';
import { PermissionsDeleteDialogComponent } from '../permissions-delete-dialog/permissions-delete-dialog.component';

@NgModule({
  declarations: [
    AddFormComponent,
    AddFormPropsComponent,
    DeleteDialogComponent,
    DeleteFormPropDialogComponent,
    PermissionsDeleteDialogComponent,
    AddPermissionsLevelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    AddFormComponent,
    DeleteDialogComponent,
    AddFormPropsComponent,
    DeleteFormPropDialogComponent,
    AddPermissionsLevelComponent,
    PermissionsDeleteDialogComponent
  ],
  entryComponents: [
    AddFormComponent,
    DeleteDialogComponent,
    AddFormPropsComponent,
    DeleteFormPropDialogComponent,
    AddPermissionsLevelComponent,
    PermissionsDeleteDialogComponent
  ]
})
export class SharedModule {}
