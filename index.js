//import { touch } from './src/async-7.js';
import fsp from 'fs/promises';
import fs from 'fs';


 const touch = (path) =>
{
   return fsp.access(path)
       .catch(()=> fsp.writeFile(path, ''))

}



touch('file.js');//.then(() => console.log('created'));
