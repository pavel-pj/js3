import fsp from 'fs/promises';
import _ from 'lodash';
import getChildren from './src/func-10.js';

const users = [
    {
        name: 'Tirion',
        children: [
            { name: 'Mira', birthday: '1983-03-23' },
        ],
    },
    { name: 'Bronn', children: [] },
    {
        name: 'Sam',
        children: [
            { name: 'Aria', birthday: '2012-11-03' },
            { name: 'Keit', birthday: '1933-05-14' },
        ],
    },
    {
        name: 'Rob',
        children: [
            { name: 'Tisha', birthday: '2012-11-03' },
        ],
    },
];

console.log(getChildren(users));


