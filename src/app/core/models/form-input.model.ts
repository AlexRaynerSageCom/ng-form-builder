import { Validator } from './validators.model';

export type FormInputTypes = 'text' | 'select' | 'radio' | 'date';

export interface FormInput {
  type: FormInputTypes;
  name: string;
  label?: string;
  placeholder?: string;
  validators?: Validator[];
}
