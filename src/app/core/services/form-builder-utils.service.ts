import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { FormInput, Validator } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderUtils {
  validatorMap = {
    required: () => Validators.required,
  };

  constructor(private fb: FormBuilder,
    private datePipe: DatePipe) {}

  createFormGroup(data: any, options: FormInput[]) {
    const form = this.fb.group({});

    options.map((option: FormInput) => {
      let value = data[option.name] || null;

      if (option.type === 'date') {
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
      validatorArr.push(this.validatorMap[validator.type]());
    });

    return validatorArr;
  }
}
