import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-assign-permission',
  templateUrl: './assign-permission.component.html',
  styleUrls: ['./assign-permission.component.css']
})
export class AssignPermissionComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AssignPermissionComponent, any>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit () {
    this.dialogRef.removePanelClass(['cdk-overlay-pane', 'mat-dialog-container']);
  }

}
