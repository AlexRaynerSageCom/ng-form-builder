import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { FormInput, Validator } from '@core/models';

import {
  VALIDATOR_REQUIRED,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  INPUT_DATE
} from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderUtils {
  validatorMap = {
    [VALIDATOR_REQUIRED]: () => Validators.required,
    [VALIDATOR_MINLENGTH]: (length: number) => Validators.minLength(length),
    [VALIDATOR_MAXLENGTH]: (length: number) => Validators.maxLength(length)
  };

  constructor(private fb: FormBuilder,
    private datePipe: DatePipe) {}

  createFormGroup(data: any, options: FormInput[]) {
    const form = this.fb.group({});

    options.map((option: FormInput) => {
      let value = data[option.name] || null;

      if (option.type === INPUT_DATE) {
        value = this.datePipe.transform(value, 'yyyy-MM-dd');
      }

      const validatorOptions = option.validators || [];

      form.addControl(option.name, new FormControl(value, this.createValidatorsForInput(validatorOptions)));
    });

    return form;
  }

  private createValidatorsForInput(validators: Validator[]) {
    const validatorArr = [];

    validators.map((validator: Validator) => {
      validatorArr.push(this.validatorMap[validator.type](validator.value));
    });

    return validatorArr;
  }
}
