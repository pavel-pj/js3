import fsp from 'fs/promises';
import _ from 'lodash';
import getFreeDomainsCount from './src/func-13.js';

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

 console.log(getFreeDomainsCount(emails));

const obj = {name:'fsf'}
obj.value  = 'MMA'
//console.log(_.get(obj, ['value3']))
//console.log(Object.hasOwn(obj,'value'))

// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };