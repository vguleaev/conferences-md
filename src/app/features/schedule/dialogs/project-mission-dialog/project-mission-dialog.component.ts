import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-mission-dialog',
  templateUrl: './project-mission-dialog.component.html',
  styleUrls: ['./project-mission-dialog.component.scss']
})
export class ProjectMissionDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ProjectMissionDialogComponent>) {}

  public ngOnInit() {}

  public close() {
    this.dialogRef.close(false);
  }
}
