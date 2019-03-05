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

@NgModule({
  declarations: [WelcomeComponent, BannerComponent, CalendarComponent, BubblesComponent],
  imports: [CommonModule, ScheduleRoutingModule, MaterialModule, AngularMaterialModule, SharedModule]
})
export class ScheduleModule {}
