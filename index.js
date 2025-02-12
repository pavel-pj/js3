import { countFiles} from './src/tree/les3.js'
import _ from 'lodash'
import * as fsTrees from '@hexlet/immutable-fs-trees';

const tree = fsTrees.mkdir('/', [
    fsTrees.mkdir('etc', [
        fsTrees.mkfile('bashrc'),
        fsTrees.mkfile('consul.cfg'),
    ]),
    fsTrees.mkfile('hexletrc'),
    fsTrees.mkdir('bin', [
        fsTrees.mkfile('ls'),
        fsTrees.mkfile('cat'),
    ]),
]);
//console.log(tree)
console.log(countFiles(tree))