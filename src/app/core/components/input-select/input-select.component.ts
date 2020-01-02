// Angular
import { Component } from '@angular/core';

// Components
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-select',
  template: `
    <div
      class="input-container"
      [formGroup]="parentForm">
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
      <input-error
        *ngIf="hasErrors()"
        [errors]="getErrors()"
        [customErrorMessages]="getCustomErrorMessages()">
      </input-error>
    </div>
  `
})
export class InputSelectComponent extends InputBaseComponent {}
