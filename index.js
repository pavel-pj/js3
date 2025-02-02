import fsp from 'fs/promises';
import _ from 'lodash';
import makeUser from './src/oop/les-1.js';
import {make } from './src/oop/les-2.js';

const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);


const rat2 = make(10, 3);

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
console.log(rat3.toString()); // '89/24'