// Angular
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormInput } from '@core/models';
import { FormGroup } from '@angular/forms';

// Helpers
import { FormBuilderUtils } from '@core/services';

@Component({
  selector: 'form-builder',
  template: `
    <form
      *ngIf="form"
      novalidate
      [formGroup]="form"
      (ngSubmit)="submitForm()">

      <form-input-builder
        *ngFor="let formInputOptions of formOptions"
        [parentForm]="form"
        [formInputOptions]="formInputOptions">
      </form-input-builder>

      <button type="submit">
        Submit
      </button>

    </form>
  `,
  styleUrls: ['./form-builder.component.less']
})
export class FormBuilderComponent implements OnInit {
  @Input() dataObject: any;

  @Input() formOptions: FormInput[];

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private formUtils: FormBuilderUtils) {}

  ngOnInit() {
    this.form = this.formUtils.createFormGroup(this.dataObject, this.formOptions);
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.formSubmitted.emit(this.form.value);
  }
}
