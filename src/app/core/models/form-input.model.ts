import { Validator } from './validators.model';
import { Options } from './options.model';

import {
  INPUT_TEXT,
  INPUT_SELECT,
  INPUT_RADIO,
  INPUT_DATE,
  INPUT_CHECKBOX
} from '@core/constants';

export type FormInputTypes = INPUT_TEXT | INPUT_SELECT | INPUT_RADIO | INPUT_DATE | INPUT_CHECKBOX;

export interface FormInput {
  type: FormInputTypes;
  name: string;
  label?: string;
  placeholder?: string;
  options?: Options[];
  validators?: Validator[];
}
