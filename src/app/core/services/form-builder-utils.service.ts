import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormInput } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderUtils {
  constructor(private fb: FormBuilder) {}

  createFormGroup(data: any, options: FormInput[]) {
    const form = this.fb.group({});

    options.map((option: FormInput) => {
      form.addControl(option.name, new FormControl(data[option.name] || null));
    });

    return form;
  }
}
