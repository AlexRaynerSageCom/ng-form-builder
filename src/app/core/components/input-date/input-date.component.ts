import { Component } from '@angular/core';

import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-radio',
  template: `
    <div
      class="input-container"
      [formGroup]="parentForm">
      <label>
        {{ formInputOptions.label }}
        <input
          type="date"
          [formControlName]="formInputOptions.name"/>
      </label>
      <input-error
        *ngIf="hasErrors()"
        [errors]="getErrors()"
        [customErrorMessages]="getCustomErrorMessages()">
      </input-error>
    </div>
  `
})
export class InputDateComponent extends InputBaseComponent {
}
