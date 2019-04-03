import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from './services/events.service';
import { MailService } from './services/mail.service';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';
import { ToastNotificationService } from './services/toast-notification.service';
import { AngularMaterialModule } from './../shared/modules/angular-material.module';

@NgModule({
  declarations: [ToastNotificationComponent],
  bootstrap: [ToastNotificationComponent],
  imports: [CommonModule, AngularMaterialModule],
  providers: [EventsService, MailService, ToastNotificationService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
