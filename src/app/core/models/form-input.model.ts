import { Validator } from './validators.model';
import { Options } from './options.model';

export type FormInputTypes = 'text' | 'select' | 'radio' | 'date' | 'checkbox';

export interface FormInput {
  type: FormInputTypes;
  name: string;
  label?: string;
  placeholder?: string;
  options?: Options[];
  validators?: Validator[];
}
