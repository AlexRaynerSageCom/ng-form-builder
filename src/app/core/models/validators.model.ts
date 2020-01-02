import {
  VALIDATOR_REQUIRED,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH
} from '@core/constants';

type ValidatorTypes = VALIDATOR_REQUIRED | VALIDATOR_MAXLENGTH | VALIDATOR_MINLENGTH;

export interface Validator {
  type: ValidatorTypes;
  value?: number;
  customMessage?: string;
}
