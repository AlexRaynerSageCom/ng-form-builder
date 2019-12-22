import { Component } from '@angular/core';

import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-select',
  template: `
    <div [formGroup]="parentForm">
      <label>
        {{ formInputOptions.label }}
        <select [formControlName]="formInputOptions.name">
          <option
            *ngFor="let option of formInputOptions.options"
            [ngValue]="option.value">
            {{ option.name }}
          </option>
        </select>
      </label>
    </div>
  `
})
export class InputSelectComponent extends InputBaseComponent {
}
