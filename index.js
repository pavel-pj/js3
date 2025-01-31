import fsp from 'fs/promises';
import _ from 'lodash';
import getGirlFriends from './src/func-11.js';

const users = [
    {
        name: 'Tirion',
        friends: [
            { name: 'Mira', gender: 'female' },
            { name: 'Ramsey', gender: 'male' },
        ],
    },
    { name: 'Bronn', friends: [] },
    {
        name: 'Sam',
        friends: [
            { name: 'Aria', gender: 'female' },
            { name: 'Keit', gender: 'female' },
        ],
    },
    {
        name: 'Rob',
        friends: [
            { name: 'Taywin', gender: 'male' },
        ],
    },
];

console.log(getGirlFriends(users));


