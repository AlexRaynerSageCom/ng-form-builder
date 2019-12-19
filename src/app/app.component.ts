import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormInput } from '@core/models';

@Component({
  selector: 'app-root',
  template: `
    <div>
      App
      <form-builder
        [dataObject]="{textName: 'some value'}"
        [formOptions]="formInputOptions">
      </form-builder>
    </div>
  `
})
export class AppComponent {
  formInputOptions: FormInput[] = [{
    type: 'text',
    name: 'textName',
    label: 'some text field'
  }];

  constructor(private fb: FormBuilder) {}
}
