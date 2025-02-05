import fsp from 'fs/promises';
import _ from 'lodash';

import PasswordValidator from './src/ood/PasswordValidator.js';

const validator = new PasswordValidator({ containNumbers: true }   );

console.log( validator.validate("ooop"))