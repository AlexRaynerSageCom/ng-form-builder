import { Component } from '@angular/core';

import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-text',
  template: `
    <div [formGroup]="parentForm">
      <label>
        {{ formInputOptions.label }}
        <input type="text" [formControlName]="formInputOptions.name"/>
      </label>
      <input-error
        *ngIf="hasErrors()"
        [errors]="getErrors()"
        [customErrorMessages]="getCustomErrorMessages()">
      </input-error>
    </div>
  `
})
export class InputTextComponent extends InputBaseComponent {
}
