import fsp from 'fs/promises';
import _ from 'lodash';

import Truncater from './src/ood/Truncater.js';

const t = new Truncater( );
console.log(t.truncate('one two',{}))

//console.log(t.truncate('aaa ooofgrg',{length:2 , separator:'***'} ))