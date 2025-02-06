import fsp from 'fs/promises';
import _ from 'lodash';
import {string,object,number} from 'yup';

 import  getInvalidBooks from './src/ood/getInvalidBooks.js';


const books = [
 { name: 'book', author: 'author' },
 { author: 'author 2' },
];

const book = { name: 'book', author: '41234',pagesCount:1, link:'https://ya.ru',genre:'classic3' };

const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]
console.log(invalidBooks)


//const schema = yup.string().required('Пусто!');
//console.log(schema.isValidSync('123455') )
//let schema =  mixed().oneOf(['jimmy', 42]);
//console.log(schema.isValidSync(42) )
/*
let u =  object({
  name:  string().required(),
  age:  number().required().positive().integer(),
  url : string().required()
});

console.log(u.isValidSync({name:"fsfsf",age:24,ff: "fsef"}))
&/
 */