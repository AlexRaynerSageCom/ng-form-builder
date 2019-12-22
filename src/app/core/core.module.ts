import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FormInputBuilderComponent,
  InputTextComponent,
  FormBuilderComponent,
  InputSelectComponent,
  InputRadioComponent,
  InputDateComponent
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
    InputDateComponent
  ],
  exports: [
    FormBuilderComponent,
    FormInputBuilderComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioComponent,
    InputDateComponent
  ],
  providers: [
    DatePipe
  ]
})
export class CoreModule {}
