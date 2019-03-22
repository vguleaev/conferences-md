import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { FormValidationHelper } from 'src/app/utils/form-validation-helper';
import { takeUntil } from 'rxjs/operators';
import { EventsService } from 'src/app/core/services/events.service';

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
  constructor(private dialogRef: MatDialogRef<AddEventDialogComponent>, private eventService: EventsService) {}

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

    this.eventService
      .suggestEvent(this.form.value)
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
