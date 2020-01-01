import { Component, OnInit, AfterContentInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/material';

import { PermissionsService } from '../services/permissions.service';
import { DialogService } from '../services/dialog.service';

import { Permissions } from '../interfaces/permissions';
import { HttpResponse } from '../interfaces/http-response';

import { PermissionsDeleteDialogComponent } from '../permissions-delete-dialog/permissions-delete-dialog.component';
import { AddPermissionsLevelComponent } from '../add-permissions-level/add-permissions-level.component';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: [
    '../forms/forms.component.css',
    '../list/list.component.css',
    './permissions.component.css'
  ]
})
export class PermissionsComponent implements OnInit,
AfterContentInit {
  public rId: string;
  public permissions: Permissions[];
  public mocks: Number[] = [1,2,3,4,5,6];

  constructor(
    private _permissions: PermissionsService,
    private _dialog: DialogService
  ) { }

  ngOnInit() {}

  ngAfterContentInit() {
    this.getPermissionsList();
  }

  public openAssignDialog(): void {

  }

  public openPermissionLevelDialog(): void {
    const dg: MatDialogRef<AddPermissionsLevelComponent> =
    this._dialog.openDialog(
      { },
      AddPermissionsLevelComponent
    );

    dg.afterClosed().subscribe(
      () => this.getPermissionsList()
    );
  }

  public openDeleteDialog(id: string): void {
    const dialogRef: MatDialogRef<PermissionsDeleteDialogComponent, any> =
    this._dialog.openDialog(
      {id}, PermissionsDeleteDialogComponent,
      {
        width: '450px', height: '240px',
        minWidth: '450px',
        hasBackdrop: true
      }
    );

    dialogRef.afterClosed().subscribe(
      () => this.getPermissionsList()
    )
  }

  private getPermissionsList(): void {
    this._permissions
    .listPermissionLevels
    .subscribe(
      (data: HttpResponse) => {
        this.permissions = data.permissions;
        this.rId = this.permissions[0].id;
      },
      (error: HttpResponse) => {
        console.log({error});
        this.permissions = [];
      }
    );
  }

  public setRid(id: string): void {
    this.rId = id;
  }
}
