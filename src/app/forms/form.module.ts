import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormsComponent } from './forms.component';
import { ListComponent } from '../list/list.component';
import { FormRecordsComponent } from '../form-records/form-records.component';
import { PermissionsComponent } from '../permissions/permissions.component';
import { PermissionRecordsComponent } from '../permission-records/permission-records.component';
import { AssignPermissionComponent } from '../assign-permission/assign-permission.component';

@NgModule({
  declarations: [
    FormsComponent,
    ListComponent,
    FormRecordsComponent,
    PermissionsComponent,
    PermissionRecordsComponent,
    AssignPermissionComponent
  ],
  imports: [CommonModule, FormRoutingModule]
})
export class FormModule {}
