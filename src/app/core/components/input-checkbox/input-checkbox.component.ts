// Angular
import { Component } from '@angular/core';

// Components
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-checkbox',
  template: `
    <div
      class="input-container"
      [formGroup]="parentForm">
      <label>
        {{ formInputOptions.label }}
        <input type="checkbox" [formControlName]="formInputOptions.name"/>
      </label>
      <input-error
        *ngIf="hasErrors()"
        [errors]="getErrors()"
        [customErrorMessages]="getCustomErrorMessages()">
      </input-error>
    </div>
  `
})
export class InputCheckboxComponent extends InputBaseComponent {}
