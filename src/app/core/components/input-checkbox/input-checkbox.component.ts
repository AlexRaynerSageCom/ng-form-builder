import { Component } from '@angular/core';

import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-checkbox',
  template: `
    <div [formGroup]="parentForm">
      <label>
        {{ formInputOptions.label }}
        <input type="checkbox" [formControlName]="formInputOptions.name"/>
      </label>
    </div>
  `
})
export class InputCheckboxComponent extends InputBaseComponent {
}
