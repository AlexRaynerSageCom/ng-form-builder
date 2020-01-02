// Angular
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';

// Components
import { InputTextComponent } from '../input-text/input-text.component';
import { InputSelectComponent } from '../input-select/input-select.component';
import { InputRadioComponent } from '../input-radio/input-radio.component';
import { InputDateComponent } from '../input-date/input-date.component';
import { InputCheckboxComponent } from '../input-checkbox/input-checkbox.component';

// Constants
import {
  INPUT_TEXT,
  INPUT_SELECT,
  INPUT_RADIO,
  INPUT_DATE,
  INPUT_CHECKBOX
} from '@core/constants';

// Models
import { FormInput } from '@core/models';

const inputOptions = {
  [INPUT_TEXT]: {
    component: InputTextComponent
  },
  [INPUT_SELECT]: {
    component: InputSelectComponent
  },
  [INPUT_RADIO]: {
    component: InputRadioComponent
  },
  [INPUT_DATE]: {
    component: InputDateComponent
  },
  [INPUT_CHECKBOX]: {
    component: InputCheckboxComponent
  }
};

@Component({
  entryComponents: [
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent,
    InputDateComponent,
    InputCheckboxComponent
  ],
  selector: 'form-input-builder',
  template: `
    <ng-container #formInput></ng-container>
  `
})
export class FormInputBuilderComponent implements OnChanges {
  @Input() parentForm: FormGroup;

  @Input() formInputOptions: FormInput;

  @ViewChild('formInput', { static: true, read: ViewContainerRef })
  formInput: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formInputOptions && inputOptions[changes.formInputOptions.currentValue.type]) {
      this.createInput();
    }
  }

  createInput() {
    this.formInput.remove();
    const factory = this.resolver.resolveComponentFactory(inputOptions[this.formInputOptions.type].component);
    const ref = this.formInput.createComponent(factory);

    try {
      this.bindInputsToFormInput(ref.instance);
    } catch (err) {
      console.error(err);
    }
  }

  bindInputsToFormInput(componentInstance: any) {
    componentInstance.parentForm = this.parentForm;
    componentInstance.formInputOptions = this.formInputOptions;
  }
}
