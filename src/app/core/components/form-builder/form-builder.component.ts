import { Component, Input, OnInit } from '@angular/core';
import { FormInput } from '@core/models';
import { FormGroup } from '@angular/forms';

import { FormBuilderUtils } from '@core/services/form-builder-utils.service';

@Component({
  selector: 'form-builder',
  template: `
    <form
      *ngIf="form"
      novalidate
      [formGroup]="form">

      <form-input-builder
        *ngFor="let formInputOptions of formOptions"
        [parentForm]="form"
        [formInputOptions]="formInputOptions">
      </form-input-builder>

    </form>
  `
})
export class FormBuilderComponent implements OnInit {
  @Input() dataObject: any;

  @Input() formOptions: FormInput[];

  form: FormGroup;

  constructor(private formUtils: FormBuilderUtils) {}

  ngOnInit() {
    this.form = this.formUtils.createFormGroup(this.dataObject, this.formOptions);
  }
}
