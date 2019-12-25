import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-permission-records',
  templateUrl: './permission-records.component.html',
  styleUrls: [
    '../forms/forms.component.css',
    '../list/list.component.css',
    '../permissions/permissions.component.css',
    './permission-records.component.css'
  ]
})
export class PermissionRecordsComponent implements OnInit {
  @Input() id: string;

  constructor() { }

  ngOnInit() {
    console.log({id: this.id});
  }
}
