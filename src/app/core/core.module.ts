import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FormInputBuilderComponent,
  InputTextComponent,
  FormBuilderComponent,
  InputSelectComponent,
  InputRadioComponent,
  InputDateComponent,
  InputCheckboxComponent,
  InputErrorComponent
} from './components';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    FormBuilderComponent,
    FormInputBuilderComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent,
    InputDateComponent,
    InputCheckboxComponent,
    InputErrorComponent
  ],
  exports: [
    FormBuilderComponent,
    FormInputBuilderComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent,
    InputDateComponent,
    InputCheckboxComponent,
    InputErrorComponent
  ],
  providers: [
    DatePipe
  ]
})
export class CoreModule {}
