import { Component, OnInit,
  AfterViewInit, AfterContentInit
} from '@angular/core';
import { MatDialogRef } from '@angular/material/material';

import { FormService } from '../services/form.service';
import { DialogService } from '../services/dialog.service';

import { HttpResponse } from '../interfaces/http-response';
import { FormDetails } from '../interfaces/form-details';

import { AddFormComponent } from '../add-form/add-form.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit,
AfterViewInit, AfterContentInit {
  public forms: FormDetails[];
  public mocks: number[] = [1,2,3,4,5,6,7];

  public props: FormDetails;

  constructor(
    private _forms: FormService,
    private _dialog: DialogService
  ) { }

  ngOnInit() { }

  ngAfterContentInit() {
    this.getFormsList();
  }

  ngAfterViewInit() {
    // setInterval(() => {}, 10000);
  }

  public editForm(title: string, id: string): void {
    const dg: MatDialogRef<AddFormComponent> =
    this._dialog.openDialog({
      add: false, edit: true,
      props: {title, id}
    }, AddFormComponent);

    dg.afterClosed().subscribe(
      () => this.updateFormsList()
    );
  }

  public updateFormsList(): void {
    this.getFormsList();
  }

  public openAddDialog(): void {
    const dg: MatDialogRef<AddFormComponent> =
    this._dialog.openDialog(
      {add: true, edit: false},
      AddFormComponent
    );

    dg.afterClosed().subscribe(
      () => this.updateFormsList()
    );
  }

  public showFormDetails(form: FormDetails): void {
      this.props = form;
  }

  public showDeleteDialog(id: string): void {
    // show dialog first
    const dialogRef: MatDialogRef<DeleteDialogComponent, any> =
    this._dialog.openDialog(
      {id: id}, DeleteDialogComponent,
      {
        width: '450px', height: '240px',
        minWidth: '450px',
        hasBackdrop: true
      }
    );

    dialogRef.afterClosed().subscribe(
      () => this.updateFormsList()
    );
  }

  public getFormsList(): void {
    this._forms
    .getList
    .subscribe(
      (data: HttpResponse) => {
        this.forms = data.forms;
        this.props = this.forms[0];
      },
      (error: HttpResponse) => {
        console.log({error});
        this.forms = [];
      }
    );
  }

  public showItemIcons(el: Element): void {
    this.showEl(el.children[2]);
    this.showEl(el.children[3]);
  }

  public hideItemIcons(el: Element): void {
    this.hideEl(el.children[2]);
    this.hideEl(el.children[3]);
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
