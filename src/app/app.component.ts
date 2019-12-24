import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormInput } from '@core/models';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <form-builder
        [dataObject]="dataObject"
        [formOptions]="formInputOptions">
      </form-builder>
    </div>
  `
})
export class AppComponent {
  dataObject: any = {
    testField: 'some',
    testSelectField: '3',
    testRadioField: 'hello',
    testDateField: '2020-05-21T01:00:00+01:00',
    testCheckboxField: true
  };

  formInputOptions: FormInput[] = [
    {
      type: 'text',
      name: 'testField',
      label: 'Field label:',
      validators: [
        { type: 'required' },
        { type: 'minlength', value: 2, customMessage: 'Min length 2 chars'},
        { type: 'maxlength', value: 5, customMessage: 'Max length 5 chars'}
      ]
    },
    {
      type: 'select',
      name: 'testSelectField',
      label: 'Select field label:',
      options: [
        { name: 'option 1', value: '1' },
        { name: 'option 2', value: '2' },
        { name: 'option 3', value: '3' }
      ]
    },
    {
      type: 'radio',
      name: 'testRadioField',
      label: 'Radio field label:',
      options: [
        { name: 'hello', value: 'hello' },
        { name: 'world', value: 'world' }
      ]
    },
    {
      type: 'date',
      name: 'testDateField',
      label: 'Date field label:',
      validators: [
        { type: 'required' }
      ]
    },
    {
      type: 'checkbox',
      name: 'testCheckboxField',
      label: 'Checkbox field label'
    }
  ];

  constructor(private fb: FormBuilder) {}
}
