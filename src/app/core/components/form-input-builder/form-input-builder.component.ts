// Angular
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Models
import { FormInput } from '@core/models';
import { InputTextComponent } from '../input-text/input-text.component';

// TODO: figure out how to map these keys to the types in the form input model
const inputOptions = {
  text: {
    component: InputTextComponent,
    binder: (comp: InputTextComponent, parentForm: FormGroup, formInputName: string, formInputLabel: string) => {
      comp.parentForm = parentForm;
      comp.formInputName = formInputName;
      comp.formInputLabel = formInputLabel;
    }
  }
};

@Component({
  entryComponents: [InputTextComponent],
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
        this.formInputOptions.name,
        this.formInputOptions.label
      );
    } catch (err) {
      console.error(err);
    }
  }
}
