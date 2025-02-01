import fsp from 'fs/promises';
import _ from 'lodash';
import {makeRectangle,getStartPoint,getWidth ,getHeight,containsOrigin} from './src/abstractions/les-6.js';

import  {makeDecartPoint, getX, getY } from './src/abstractions/points.js';

const p = makeDecartPoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);


//console.log(containsOrigin(rectangle)); // false
//getWidth(rectangle); // 4

const rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
console.log(containsOrigin(rectangle2)); // true