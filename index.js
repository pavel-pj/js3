import fsp from 'fs/promises';
import _ from 'lodash';

import Time from './src/oop/Time.js';

//const time = new Time(21,25);
const time = Time.fromString('3:8');
// автоматически вызывается метод toString()
console.log(`The time is ${time}`); // 'The time is 10:23'


