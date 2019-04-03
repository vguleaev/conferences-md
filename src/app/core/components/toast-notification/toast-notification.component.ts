import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss']
})
export class ToastNotificationComponent {
  constructor(public snackBarRef: MatSnackBarRef<ToastNotificationComponent>) {}
}
