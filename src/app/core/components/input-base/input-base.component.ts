import { Injectable, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormInput } from '@core/models';

@Injectable()
export abstract class InputBaseComponent {
  @Input() parentForm: FormGroup;

  @Input() formInputOptions: FormInput;
}
