import { Component, OnInit, AfterContentInit, OnChanges, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormService } from '../services/form.service';
import { DialogService } from '../services/dialog.service';
import { SnackBarService } from '../services/snack-bar.service';

import { HttpResponse } from '../interfaces/http-response';
import { FormDetails, FormRecords } from '../interfaces/form-details';

import { AddFormPropsComponent } from '../add-form-props/add-form-props.component';
import { DeleteFormPropDialogComponent } from '../delete-form-prop-dialog/delete-form-prop-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,
AfterContentInit, OnChanges {
  @Input() props: FormDetails;

  public mocks: number[] = [1,2,3,4,5,6,7];
  public lists: Array<FormRecords>;

  constructor(
    private _forms: FormService,
    private _dialog: DialogService,
    private _snackbar: SnackBarService
  ) { }

  ngOnInit() { }

  ngOnChanges() {
    if (
      this.props !== undefined
      ) {
      // get list
      this.getList();
    }
  }

  ngAfterContentInit() { }

  public showDeleteDialog(prop: FormRecords): void {
    // show dialog first
    const dialogRef: MatDialogRef<DeleteFormPropDialogComponent, any> =
    this._dialog.openDialog(
      {id: prop.id, prop}, DeleteFormPropDialogComponent,
      {
        width: '450px', height: '240px',
        minWidth: '450px',
        hasBackdrop: true
      }
    );

    dialogRef.afterClosed().subscribe(
      () => this.getList()
    );
  }

  public editProperty(prop: FormRecords): void {
    const dialogRef: MatDialogRef<AddFormPropsComponent> = this._dialog.openDialog(
      {
        add: false, edit: true,
        props: {
          title: this.props.title,
          id: prop.id,
          key: prop.key, type: prop.type
        }
      },
      AddFormPropsComponent
    );

    dialogRef.afterClosed().subscribe(
      (data) => {
        this.getList();
      }
    );
  }

  public addProperties(): void {
    const dialogRef: MatDialogRef<AddFormPropsComponent> = this._dialog.openDialog(
      {
        add: true, edit: false,
        props: {title: this.props.title}
      },
      AddFormPropsComponent
    );

    dialogRef.afterClosed().subscribe(
      (data) => {
        this.getList();
      }
    );
  }

  private getList(): void {
    this._forms
    .getFormDetails(this.props.id, this.props.title)
    .subscribe(
      (data: HttpResponse) => {
        console.log({data});
        this.lists = data.rows;
      },
      (error: HttpResponse) => {
        console.log({error});
        this.lists = [];
      }
    );
  }

  public showItemIcons(el: Element): void {
    this.showEl(el.children[1]);
    this.showEl(el.children[2]);
  }

  public hideItemIcons(el: Element): void {
    this.hideEl(el.children[1]);
    this.hideEl(el.children[2]);
  }

  public showEl(el): void {
    if (el.classList.contains('d-none')) {
      el.classList.replace('d-none', 'd-flex');
      return;
    }
  }

  public hideEl(el): void {
    el.classList.replace('d-flex', 'd-none');
  }
}
