import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { FormValidationHelper } from 'src/app/utils/form-validation-helper';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public form = new FormGroup({
    email: new FormControl('', Validators.email),
    eventName: new FormControl('', Validators.required),
    eventLink: new FormControl('', Validators.required)
  });

  private destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor(private dialogRef: MatDialogRef<AddEventDialogComponent>) {}

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
  }

  public ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
