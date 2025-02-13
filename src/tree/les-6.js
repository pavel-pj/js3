import _ from 'lodash'
import * as fsTrees from '@hexlet/immutable-fs-trees';

function acc (tree,needLevel=Infinity) {

    const deepth = 0;
    const iter  = (tree, deepth, needLevel) => {

        if (fsTrees.isDirectory(tree) && (deepth <= needLevel)) {
            if (fsTrees.getChildren(tree).length == 0) {
                return fsTrees.getName(tree);
            }
        }

        return fsTrees.getChildren(tree)
            .filter((item) => fsTrees.isDirectory(item))
            .map((item) => iter(item, deepth + 1, needLevel))
            .flat()

    }
    return iter(tree,deepth,needLevel);

}

export {acc}