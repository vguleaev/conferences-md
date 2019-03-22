import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { FormValidationHelper } from 'src/app/utils/form-validation-helper';
import { MailService } from './../../../../core/services/mail.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us-dialog',
  templateUrl: './contact-us-dialog.component.html',
  styleUrls: ['./contact-us-dialog.component.scss']
})
export class ContactUsDialogComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  private destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor(private dialogRef: MatDialogRef<ContactUsDialogComponent>, private emailService: MailService) {}

  public ngOnInit() {}

  public close() {
    this.dialogRef.close(false);
  }

  public submit() {
    if (this.form.invalid) {
      FormValidationHelper.validateAllFormFields(this.form);
      return;
    }

    this.isLoading = true;

    this.emailService
      .sendContactMail(this.form.value)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        success => {
          this.isLoading = false;
          this.close();
          //alert('Thank you!');
        },
        error => {
          this.isLoading = false;
          alert('We are sorry, but something failed!');
        }
      );
  }

  public ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
