import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormInputBuilderComponent, InputTextComponent, FormBuilderComponent } from './components';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    FormBuilderComponent,
    FormInputBuilderComponent,
    InputTextComponent
  ],
  exports: [
    FormBuilderComponent,
    FormInputBuilderComponent,
    InputTextComponent
  ],
  providers: []
})
export class CoreModule {}
