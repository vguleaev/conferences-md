import { Component, OnInit } from '@angular/core';
import { EventsService } from './../../../../core/services/events.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddEventDialogComponent } from './../../dialogs/add-event-dialog/add-event-dialog.component';
import { EventDetailsDialogComponent } from './../../dialogs/event-details-dialog/event-details-dialog.component';
import { ContactUsDialogComponent } from './../../dialogs/contact-us-dialog/contact-us-dialog.component';
import { ProjectMissionDialogComponent } from './../../dialogs/project-mission-dialog/project-mission-dialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public months: any[] = [];
  public areEventsLoading: boolean;

  constructor(private eventsService: EventsService, private matDialog: MatDialog) {}

  public ngOnInit() {
    this.areEventsLoading = true;

    this.eventsService.get().subscribe(events => {
      this.months = events;
      this.areEventsLoading = false;
    });
  }

  public onEventClick(event: any) {
    const config: MatDialogConfig = {
      panelClass: 'modal-dialog',
      closeOnNavigation: true,
      autoFocus: false,
      data: {
        event: event
      }
    };

    const dialogRef = this.matDialog.open(EventDetailsDialogComponent, config);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        console.log('Ok');
      } else {
        console.log('Closed');
      }
    });
  }

  public onProjectMissionClick() {
    const config: MatDialogConfig = {
      panelClass: 'modal-dialog',
      closeOnNavigation: true,
      autoFocus: false
    };

    const dialogRef = this.matDialog.open(ProjectMissionDialogComponent, config);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        console.log('Ok');
      } else {
        console.log('Closed');
      }
    });
  }

  public onContactUsClick() {
    const config: MatDialogConfig = {
      panelClass: 'modal-dialog',
      closeOnNavigation: true,
      autoFocus: false
    };

    const dialogRef = this.matDialog.open(ContactUsDialogComponent, config);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        console.log('Ok');
      } else {
        console.log('Closed');
      }
    });
  }

  public onAddEvent() {
    const config: MatDialogConfig = {
      panelClass: 'modal-dialog',
      closeOnNavigation: true,
      autoFocus: false
    };

    const dialogRef = this.matDialog.open(AddEventDialogComponent, config);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        console.log('Ok');
      } else {
        console.log('Closed');
      }
    });
  }
}
