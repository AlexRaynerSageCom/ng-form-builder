import { Component } from '@angular/core';

import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-radio',
  template: `
    <div [formGroup]="parentForm">
      <label>
        {{ formInputOptions.label }}
        <label
          *ngFor="let option of formInputOptions.options">
          <input
            type="radio"
            [value]="option.value"
            [formControlName]="formInputOptions.name"/>
          {{ option.name }}
        </label>
      </label>
    </div>
  `
})
export class InputRadioComponent extends InputBaseComponent {
}
