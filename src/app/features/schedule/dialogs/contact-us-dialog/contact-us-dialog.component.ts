import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-us-dialog',
  templateUrl: './contact-us-dialog.component.html',
  styleUrls: ['./contact-us-dialog.component.scss']
})
export class ContactUsDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ContactUsDialogComponent>) {}

  public ngOnInit() {}

  public close() {
    this.dialogRef.close(false);
  }
}
