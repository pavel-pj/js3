import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';

export const getDirectorySize = (path) => {
   const promise = fsp.readdir(path).then((data) =>{
        return data.map((item)=>path+'/'+item)
   }).then((d)=>{

       //Возвращаем вес файла
       const promises = d.map((item)=>{
                return fsp.stat(item).then((file) =>{
                   return file.isDirectory() ? 0 : file.size;
                });
           })
       
      //Общий промис с размером файлов
      return Promise.all(promises)
          .then((sizes)=>_.sumBy(sizes))

      })

   return promise
}

export default getDirectorySize;