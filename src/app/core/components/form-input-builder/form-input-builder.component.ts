// Angular
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Components
import { InputTextComponent } from '../input-text/input-text.component';
import { InputSelectComponent } from '../input-select/input-select.component';
import { InputRadioComponent } from '../input-radio/input-radio.component';
import { InputDateComponent } from '../input-date/input-date.component';
import { InputCheckboxComponent } from '../input-checkbox/input-checkbox.component';

// Models
import { FormInput } from '@core/models';

// TODO: figure out how to map these keys to the types in the form input model
const inputOptions = {
  text: {
    component: InputTextComponent
  },
  select: {
    component: InputSelectComponent
  },
  radio: {
    component: InputRadioComponent
  },
  date: {
    component: InputDateComponent
  },
  checkbox: {
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
