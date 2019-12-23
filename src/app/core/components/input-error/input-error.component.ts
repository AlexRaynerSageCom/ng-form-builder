// Angular
import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

// Models
import { ErrorMessages } from '@core/models';

@Component({
  selector: 'input-error',
  template: `
    <div *ngFor="let message of messagesToDisplay">
      {{ message }}
    </div>
  `
})
export class InputErrorComponent implements OnChanges {
  @Input() errors: ValidationErrors;

  @Input() customErrorMessages: ErrorMessages;

  messagesToDisplay: string[] = [];

  defaultErrorMessages: ErrorMessages = {
    required: 'This field is required'
  };

  combinedErrorMessages: ErrorMessages = {};

  ngOnChanges() {
    this.buildDefaultMessages();
    this.buildCustomMessages();
    this.buildErrorMessages();
  }

  buildDefaultMessages() {
    for (const key in this.defaultErrorMessages) {
      if (this.defaultErrorMessages.hasOwnProperty(key)) {
        this.combinedErrorMessages[key] = this.defaultErrorMessages[key];
      }
    }
  }

  buildCustomMessages() {
    for (const key in this.customErrorMessages) {
      if (this.customErrorMessages.hasOwnProperty(key)) {
        this.combinedErrorMessages[key] = this.customErrorMessages[key];
      }
    }
  }

  buildErrorMessages() {
    this.messagesToDisplay = [];
    if (this.errors) {
      for (const key in this.errors) {
        if (this.combinedErrorMessages.hasOwnProperty(key)) {
          this.messagesToDisplay.push(this.combinedErrorMessages[key]);
        }
      }
    }
  }
}
