import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastNotificationComponent } from '../components/toast-notification/toast-notification.component';

@Injectable()
export class ToastNotificationService {
  constructor(private snackBar: MatSnackBar, private readonly zone: NgZone) {}

  public notify(message: string) {
    this.zone.run(() => {
      this.snackBar.openFromComponent(ToastNotificationComponent, {
        announcementMessage: message,
        panelClass: ['blue-snackbar'],
        data: {},
        duration: 13500,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    });
  }
}
