import { Injectable, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

import { FormInput, ErrorMessages, Validator } from '@core/models';

@Injectable()
export abstract class InputBaseComponent {
  @Input() parentForm: FormGroup;

  @Input() formInputOptions: FormInput;

  hasErrors(): boolean {
    return this.parentForm.get(this.formInputOptions.name).dirty &&
      this.parentForm.get(this.formInputOptions.name).invalid;
  }

  getErrors(): ValidationErrors {
    return this.parentForm.get(this.formInputOptions.name).errors;
  }

  getCustomErrorMessages(): ErrorMessages {
    const messages = {};

    if (this.formInputOptions.validators) {
      this.formInputOptions.validators.map((validator: Validator) => {
        if (validator.customMessage) {
          messages[validator.type] = validator.customMessage;
        }
      });
    }
    return messages;
  }
}
