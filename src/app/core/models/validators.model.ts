export type ValidatorTypes = 'required' | 'maxlength' | 'minlength';

export interface Validator {
  type: ValidatorTypes;
  value: string | number;
}
