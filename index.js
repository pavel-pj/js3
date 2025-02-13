import { getAgregate,getFilesCount} from './src/tree/less4.js'
import _ from 'lodash'
import * as fsTrees from '@hexlet/immutable-fs-trees';

const tree = fsTrees.mkdir('/', [
    fsTrees.mkdir('etc', [
        fsTrees.mkdir('apache'),
        fsTrees.mkdir('nginx', [
            fsTrees.mkfile('nginx.conf'),
        ]),
    ]),
    fsTrees.mkdir('consul', [
        fsTrees.mkfile('config.json'),
        fsTrees.mkfile('file.tmp'),
        fsTrees.mkdir('data'),
    ]),
    fsTrees.mkfile('hosts'),
    fsTrees.mkfile('resolve'),
]);
//console.log(tree)
console.log(getAgregate(tree))

