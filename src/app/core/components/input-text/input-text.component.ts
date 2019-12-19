import { Component } from '@angular/core';

import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'input-text',
  template: `
    <div [formGroup]="parentForm">
      <label>
        {{ formInputLabel }}
        <input type="text" [formControlName]="formInputName"/>
      </label>
    </div>
  `
})
export class InputTextComponent extends InputBaseComponent {
}
