import { Injectable, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export abstract class InputBaseComponent {
  @Input() parentForm: FormGroup;

  @Input() formInputName: string;

  @Input() formInputLabel: string;
}
