import { getDirectorySize } from './src/async-12.js';
import fsp from 'fs/promises';
import _ from 'lodash';

const v = [ 739, 610, 176, 0 ];

//console.log(_.sumBy(v))


 getDirectorySize('src')


     .then(console.log);

/*
const d = ['src/async-7.js','src/async-11.js','src/folder']

const promises = d.map((item)=>{
    return fsp.stat(item).then((file) =>{
        return file.isDirectory() ? 0 : file.size ;
    });
})

const promise = Promise.all(promises);
promise.then(console.log)
*/