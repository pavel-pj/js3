import { downcaseFileNames} from './src/tree/rec1.js'
import _ from 'lodash'
import * as fsTrees from '@hexlet/immutable-fs-trees';

const tree = fsTrees.mkdir('/', [
    fsTrees.mkdir('eTc', [
        fsTrees.mkdir('NgiNx'),
        fsTrees.mkdir('CONSUL', [
            fsTrees.mkfile('config.json'),
        ]),
    ]),
    fsTrees.mkfile('hOsts'),
]);
//console.log(tree)
console.log(JSON.stringify(downcaseFileNames(tree)))