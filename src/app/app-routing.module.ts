import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { ListComponent } from "./list/list.component";
// import { UserDetailsPaneComponent } from "./user-details-pane/user-details-pane.component";
// import { NotificationPaneComponent } from "./notification-pane/notification-pane.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
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
