import { acc} from './src/tree/les-6.js'
import _ from 'lodash'
import * as fsTrees from '@hexlet/immutable-fs-trees';

const tree = fsTrees.mkdir('/', [
    fsTrees.mkdir('etc', [
        fsTrees.mkdir('apache'),
        fsTrees.mkdir('nginx', [
            fsTrees.mkfile('nginx.conf'),
        ]),
        fsTrees.mkdir('consul', [
            fsTrees.mkfile('config.json'),
            fsTrees.mkdir('data'),
        ]),
    ]),
    fsTrees.mkdir('logs'),
    fsTrees.mkfile('hosts'),
]);

console.log(acc(tree,2));



