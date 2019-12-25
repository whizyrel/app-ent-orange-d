import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: [
    '../forms/forms.component.css',
    '../list/list.component.css',
    './permissions.component.css'
  ]
})
export class PermissionsComponent implements OnInit {
  private rId: string;

  constructor() { }

  ngOnInit() {
  }

  public setRid(id: string): void {
    this.rId = id;
  }
}
