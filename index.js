import fsp from 'fs/promises';
import _ from 'lodash';

import makeUser from './src/oop/user.js';
import {getMutualFriends} from './src/oop/users.js';




const user1 = makeUser({
    friends: [
        makeUser({ id: 1 }),
        makeUser({ id: 2 }), // общий друг
    ],
});
const user2 = makeUser({
    friends: [
        makeUser({ id: 2 }), // общий друг
        makeUser({ id: 3 }),
    ],
});

console.log(getMutualFriends(user1, user2)); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ] - массив состоящий из одного пользователя, общего друга
//const d = [1,4,6];
//console.log(d.includes(4))
