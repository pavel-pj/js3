import _ from 'lodash'
import * as fsTrees from '@hexlet/immutable-fs-trees';
function getAgregate (tree) {

    const childs = fsTrees.getChildren(tree);

    const result =  childs.filter((item)=>fsTrees.isDirectory(item))
        .map((item)=>{
            const name = fsTrees.getName(item);
            const countFiles = getFilesCount(item);
            return [name,countFiles];
        })
    return result;


}

function getFilesCount(tree){

    if (fsTrees.isFile(tree)) {
        return 1;
    }

    const childs = fsTrees.getChildren(tree);
    //console.log(childs)
     const countFiles = childs.map((item)=>getFilesCount(item));

    return  _.sum(countFiles);


}

export {getAgregate,getFilesCount}