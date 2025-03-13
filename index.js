import * as fsTrees from '@hexlet/immutable-fs-trees';
import { findFilesByName } from './src/tree/finder.js';
import  set from './src/tst/set.js';

const obj  = {};
set (obj,"name","Игорь");

console.log(obj);

set (obj,"name","Вася");
console.log(obj);
