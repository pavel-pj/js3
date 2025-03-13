import * as fsTrees from '@hexlet/immutable-fs-trees';
import { findFilesByName } from './src/tree/finder.js';
import  get from './src/tst/get.js';


const val = get({name:"Игорян"}, "name" , "Ошибка");
console.log(val);

