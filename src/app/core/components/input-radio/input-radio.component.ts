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
        <label
          *ngFor="let option of formInputOptions.options">
          <input
            type="radio"
            [value]="option.value"
            [formControlName]="formInputOptions.name"/>
          {{ option.name }}
        </label>
      </label>
      <input-error
        *ngIf="hasErrors()"
        [errors]="getErrors()"
        [customErrorMessages]="getCustomErrorMessages()">
      </input-error>
    </div>
  `
})
export class InputRadioComponent extends InputBaseComponent {
}
