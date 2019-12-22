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
    </div>
  `
})
export class InputTextComponent extends InputBaseComponent {
}
