import { Component, OnInit, Inject, AfterViewInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpResponse } from '../interfaces/http-response';
import { FormDetails } from '../interfaces/form-details';

import { FormService } from '../services/form.service';
import { PermissionsService } from '../services/permissions.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-assign-permission',
  templateUrl: './assign-permission.component.html',
  styleUrls: ['./assign-permission.component.css']
})
export class AssignPermissionComponent implements OnInit, AfterViewInit {
  private pid: string;
  private fid: string;
  public assignees: Array<string> = [];
  public forms: Array<FormDetails>;
  public mocks: Array<number> = [1, , , , , , , , , , 10];
  private ribbonClassLists: Array<string> = [
    '__green',
    '__green-dark-1x',
    '__blue',
    '__blue-1x',
    '__blue-2x',
    '__red'
  ];
  constructor(
    private dialogRef: MatDialogRef<AssignPermissionComponent, any>,
    @Inject(MAT_DIALOG_DATA) public data,
    private _form: FormService,
    private _permissions: PermissionsService,
    private _snackbar: SnackBarService
  ) {}
  ngOnInit() {
    this.dialogRef.removePanelClass([
      'cdk-overlay-pane',
      'mat-dialog-container'
    ]);

    this.pid = this.data.id;
  }
  ngAfterViewInit(): void {
    this.getForms();
  }

  public chooseForm(id: string, card: Element): void {
    const icon = card.children[1].children[1];
    console.log({ id, card, icon });
    this.fid = id;

    icon.classList.contains('__form--selected__blue')
      ? icon.classList.toggle('__form--selected__red')
      : // tslint:disable-next-line: no-unused-expression
        null;

    icon.classList.toggle('__form--selected__red');

    // make call to submit
    this.assignPermission(this.fid, this.pid);
  }

  private assignPermission(fid: string, pid: string): void {
    this._permissions.addPermissionRecords({ id: pid, fid }).subscribe(
      (data: HttpResponse) => {
        console.log({ data });

        this.closeDialog();
        this._snackbar.showSnackBar(data.message);
      },
      (error: HttpResponse) => {
        console.log({ error });

        this.closeDialog();
        this._snackbar.showSnackBar(
          error.error.message,
          undefined,
          { panelClass: '__mx-vw-40' }
        );
      }
    );
  }

  public formSelectionStatus(stat: boolean = false): boolean {
    return stat;
  }

  private getForms(): void {
    this._form.getList.subscribe(
      (data: HttpResponse) => {
        this.forms = data.forms;
      },
      (error: HttpResponse) => {
        console.log({ error });
        this.closeDialog();
      }
    );
  }

  public get chooseRibbonClass(): string {
    return this.ribbonClassLists[
      Math.floor(Math.random() * this.ribbonClassLists.length)
    ];
  }

  public closeDialog(): void {
    this.dialogRef.close();  }
}
