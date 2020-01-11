import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { DialogService } from '../services/dialog.service';

import {Links} from '../common/links';

import {LinksProps} from '../interfaces/links-props';
import {PaneProps} from '../interfaces/pane-props';
import { TopbarProps } from '../interfaces/topbar-props';

import { AddFormComponent } from '../add-form/add-form.component';
import { DialogConfig } from '../interfaces/dialog-config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public sidebarLinks: Array<LinksProps>;
  public topbarLinks: Array<LinksProps>;
  public path: string = <string>'form';

  private activatedComp: any;

  public pane: PaneProps = {
    notification: false,
    user: false
  };

  public showPane: boolean = <boolean>true;
  public showIndex: number = <number>0;

  constructor(private _links: Links, private _dialog: DialogService) {}

  ngOnInit() {
    this.sidebarLinks = this._links.sidebarLinks;
    this.topbarLinks = this._links.topbarLinks['forms'];
  }

  public menuClicked(prop: string): void {
    this.path = `./${prop.substr(0, prop.length - 1)}`;
    this.topbarLinks = this._links.topbarLinks[prop.toLowerCase()];
  }

  public openAddDialog(): void {
    const dg: MatDialogRef<AddFormComponent> = this._dialog.openDialog(
      { add: true, edit: false },
      AddFormComponent,
      <DialogConfig>{}
    );

    dg.afterClosed().subscribe(() => {
      this.activatedComp.updateFormsList();
    });
  }

  public switchPanes(choice: string) {
    if (choice === 'u' && this.showIndex < 1) {
      if (this.pane.user) {
        this.pane.notification = false;
        this.pane.user = false;
        this.showIndex = 0;
        return;
      }

      this.pane.notification = false;
      this.pane.user = true;

      return;
    }

    if (choice === 'n' && this.showIndex < 1) {
      if (this.pane.notification) {
        this.pane.notification = false;
        this.pane.user = false;
        this.showIndex = 0;
        return;
      }

      this.pane.notification = true;
      this.pane.user = false;

      return;
    }

    this.pane.notification = false;
    this.pane.user = false;
    this.showIndex = 0;
  }

  activateRt(e) {
    console.log({ e });
    this.activatedComp = e;
  }

  deActivateRt(e) {
    console.log({ e });
  }
}
