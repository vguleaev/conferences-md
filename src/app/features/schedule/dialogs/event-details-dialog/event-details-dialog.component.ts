import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-event-details-dialog',
  templateUrl: './event-details-dialog.component.html',
  styleUrls: ['./event-details-dialog.component.scss']
})
export class EventDetailsDialogComponent implements OnInit {
  public event: object;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { event: object }, private dialogRef: MatDialogRef<EventDetailsDialogComponent>) {
    if (data && data.event) {
      this.event = data.event;
    } else {
      throw new Error('Event is required');
    }
  }

  public ngOnInit() {}

  public close() {
    this.dialogRef.close(false);
  }
}
