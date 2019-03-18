import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class FormValidationHelper {
  public static validateAllFormFields(form: FormGroup) {
    if (!form) {
      return;
    }

    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
