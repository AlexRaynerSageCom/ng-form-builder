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
  InputCheckboxComponent
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
    InputCheckboxComponent
  ],
  exports: [
    FormBuilderComponent,
    FormInputBuilderComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent,
    InputDateComponent,
    InputCheckboxComponent
  ],
  providers: [
    DatePipe
  ]
})
export class CoreModule {}
