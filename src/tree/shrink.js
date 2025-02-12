import * as fsTrees from '@hexlet/immutable-fs-trees';
import _ from 'lodash'
function compressImages(tree) {

    const childs = fsTrees.getChildren(tree)
    //Новая директория без файлов
    const directorys =childs.filter(fsTrees.isDirectory);
    const meta = fsTrees.getMeta(tree)
    const name = fsTrees.getName(tree)

    const files = childs.filter((item)=> {
        return !fsTrees.isDirectory(item)
    }).map((item)=>{

        const name = fsTrees.getName(item);
        let size = fsTrees.getMeta(item).size;
        const fileType = name.slice( name.length-3 ,name.length)

        if(  fileType == 'jpg'){
            size = size/2
        }
        const meta = _.cloneDeep(fsTrees.getMeta(item));
        meta.size =  size;
        const file =  fsTrees.mkfile(name, meta);
        console.log(file)
        return file;

    })

    const newTree = fsTrees.mkdir(name,[...files,...directorys],meta)

    return newTree

}
export {compressImages}