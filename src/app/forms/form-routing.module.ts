import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsComponent } from '../forms/forms.component';
import { FormRecordsComponent } from '../form-records/form-records.component';
import { PermissionsComponent } from '../permissions/permissions.component';

const routes: Routes = [
  {
    path: 'form',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: FormsComponent,
        pathMatch: 'full',
        outlet: 'path',
      },
      {
        path: 'records',
        component: FormRecordsComponent,
        pathMatch: 'full',
        outlet: 'path',
      },
      {
        path: 'permissions',
        component: PermissionsComponent,
        pathMatch: 'full',
        outlet: 'path',
      },
      {
        path: '**',
        redirectTo: '/form/(path:list)',
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
