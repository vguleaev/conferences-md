import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddEventDialogComponent>) {}

  public ngOnInit() {}

  public close() {
    this.dialogRef.close(false);
  }
}
