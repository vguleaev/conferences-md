import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';
import { AngularMaterialModule } from './../../shared/modules/angular-material.module';
import { ContactUsDialogComponent } from './dialogs/contact-us-dialog/contact-us-dialog.component';
import { ProjectMissionDialogComponent } from './dialogs/project-mission-dialog/project-mission-dialog.component';
import { AddEventDialogComponent } from './dialogs/add-event-dialog/add-event-dialog.component';
import { EventDetailsDialogComponent } from './dialogs/event-details-dialog/event-details-dialog.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    BannerComponent,
    CalendarComponent,
    BubblesComponent,
    ContactUsDialogComponent,
    ProjectMissionDialogComponent,
    AddEventDialogComponent,
    EventDetailsDialogComponent
  ],
  imports: [CommonModule, ScheduleRoutingModule, MaterialModule, AngularMaterialModule, SharedModule],
  entryComponents: [ContactUsDialogComponent, ProjectMissionDialogComponent, AddEventDialogComponent, EventDetailsDialogComponent]
})
export class ScheduleModule {}
