import fsp from 'fs/promises';
import _ from 'lodash';
import get from './src/obj-9.js';

const data = {
    user: 'ubuntu',
    hosts: {

        0: {
            name: 'web1',
        },
        "1": {
            name: 'web2',
            null: 3,
            active: false,
        },
    },
};


// console.log( typeof(data.hosts[1].name))

 console.log(get(data, ['user', 'ubuntu'])); //web2

//console.log(get(data, ['user']); // 'ubuntu');