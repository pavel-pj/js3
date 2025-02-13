import _ from 'lodash'
import * as fsTrees from '@hexlet/immutable-fs-trees';

const du = (tree) => {

    const childs = fsTrees.getChildren(tree);
    const  result = childs.map((item)=>{

        const name = fsTrees.getName(item);
        if(fsTrees.isFile(item)){
            return [name,fsTrees.getMeta(item).size]
        }
        return [name,countFiles(item)]
    })

   return  result.sort((a,b)=>{
        return b[1] - a[1]
    });


}

const countFiles = (tree) =>{


    if(fsTrees.isFile(tree)){
        const size = fsTrees.getMeta(tree).size;
        return size;

    }

    const childs = fsTrees.getChildren(tree);
    const fileSizes = childs.map((item)=>countFiles(item));

    return _.sum(fileSizes)

}
export {du,countFiles}