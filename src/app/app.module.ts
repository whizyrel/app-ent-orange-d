import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { SharedModule } from './shared/shared.module';

import { AppDetailsService } from './services/app-details.service';
import { ApiUrlsService } from './services/api-urls.service';
import { LocalStorageService } from './services/local-storage.service';
import { DecryptEncryptService } from './services/decrypt-encrypt.service';
import { FormService } from './services/form.service';
import { DialogService } from './services/dialog.service';
import { PermissionsService } from './services/permissions.service';
import { SnackBarService } from './services/snack-bar.service';
import { SigninService } from './services/signin.service';

import { Links } from './common/links';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { MockPreloaderComponent } from './mock-preloader/mock-preloader.component';
import { ListComponent } from './list/list.component';
import { NotificationPaneComponent } from './notification-pane/notification-pane.component';
import { UserDetailsPaneComponent } from './user-details-pane/user-details-pane.component';
import { HomeComponent } from './home/home.component';
import { FormRecordsComponent } from './form-records/form-records.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PermissionRecordsComponent } from './permission-records/permission-records.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    FormsComponent,
    MockPreloaderComponent,
    ListComponent,
    NotificationPaneComponent,
    UserDetailsPaneComponent,
    FormRecordsComponent,
    PermissionsComponent,
    PermissionRecordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    SharedModule
  ],
  providers: [
    AppDetailsService,
    ApiUrlsService,
    LocalStorageService,
    DecryptEncryptService,
    Links,
    FormService,
    DialogService, PermissionsService,
    SnackBarService, SigninService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
