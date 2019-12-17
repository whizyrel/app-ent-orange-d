import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { UserDetailsPaneComponent } from './user-details-pane/user-details-pane.component';
import { NotificationPaneComponent } from './notification-pane/notification-pane.component';
import { FormRecordsComponent } from './form-records/form-records.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
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
        path: '**',
        redirectTo: '/form/(path:list)',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/form/(path:list)',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
