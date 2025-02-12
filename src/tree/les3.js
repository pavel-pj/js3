import _ from 'lodash'
import * as fsTrees from '@hexlet/immutable-fs-trees';
const countFiles = (tree) =>{

    if(fsTrees.isFile(tree)){
        return 1;
    }

    const childs = fsTrees.getChildren(tree);
    const total=childs.map((item)=>countFiles(item))
    
    return _.sum(total);


}

export {countFiles}