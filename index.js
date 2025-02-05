import fsp from 'fs/promises';
import _ from 'lodash';

import Url from './src/ood/Url.js';

const t = new Url('http://yandex.ru:80?key=value&key2=value2' );
console.log(t.getScheme())

console.log(t.equals(new Url('http://yandex.ru:80?key=value&key2=value2')));

//const p = new URL('http://yandex.ru:80?key=value&key2=value2');
//console.log(p)


//console.log(t.truncate('aaa ooofgrg',{length:2 , separator:'***'} ))