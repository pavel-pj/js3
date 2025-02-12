import * as fsTrees from '@hexlet/immutable-fs-trees';
import _ from 'lodash'

function downcaseFileNames(tree) {

    let name = fsTrees.getName(tree);
    const meta = _.cloneDeep(fsTrees.getMeta(tree));

    if (fsTrees.isFile(tree)) {
        name = name.toLowerCase();
        return fsTrees.mkfile(name,meta);

    }

    const childs =fsTrees.getChildren(tree).map((item)=>downcaseFileNames(item))

    return fsTrees.mkdir(name,childs,meta);
}

export {downcaseFileNames};