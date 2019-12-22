import { Component } from '@angular/core';

import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-radio',
  template: `
    <div [formGroup]="parentForm">
      <label>
        {{ formInputOptions.label }}
        <input
          type="date"
          [formControlName]="formInputOptions.name"/>
      </label>
    </div>
  `
})
export class InputDateComponent extends InputBaseComponent {
}
