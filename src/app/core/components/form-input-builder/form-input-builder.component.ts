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
    component: InputTextComponent,
    binder: (comp: InputTextComponent, parentForm: FormGroup, formInputOptions: FormInput) => {
      comp.parentForm = parentForm;
      comp.formInputOptions = formInputOptions;
    }
  },
  select: {
    component: InputSelectComponent,
    binder: (comp: InputSelectComponent, parentForm: FormGroup, formInputOptions: FormInput) => {
      comp.parentForm = parentForm;
      comp.formInputOptions = formInputOptions;
    }
  },
  radio: {
    component: InputRadioComponent,
    binder: (comp: InputSelectComponent, parentForm: FormGroup, formInputOptions: FormInput) => {
      comp.parentForm = parentForm;
      comp.formInputOptions = formInputOptions;
    }
  },
  date: {
    component: InputDateComponent,
    binder: (comp: InputDateComponent, parentForm: FormGroup, formInputOptions: FormInput) => {
      comp.parentForm = parentForm;
      comp.formInputOptions = formInputOptions;
    }
  },
  checkbox: {
    component: InputCheckboxComponent,
    binder: (comp: InputCheckboxComponent, parentForm: FormGroup, formInputOptions: FormInput) => {
      comp.parentForm = parentForm;
      comp.formInputOptions = formInputOptions;
    }
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
      inputOptions[this.formInputOptions.type].binder(
        ref.instance,
        this.parentForm,
        this.formInputOptions
      );
    } catch (err) {
      console.error(err);
    }
  }
}
