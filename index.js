import { getTypes } from './src/async-11.js';
import fsPromises from 'fs/promises';


getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);

/*
const files = ['file.js','package.json' , 'src' , 'er'  ];

const initPromise = Promise.resolve([]);


const promise = files.reduce( (acc,path) =>{
   
   const newAcc = acc.then((contents) => {
        return fsPromises.stat(path)
            .then((res) =>  {
                const type = () =>  {
                   return res.isDirectory() ?  'Direcotry' : 'File' ;
                }
                return  contents.concat(type())
                  })
            .catch(e =>{
                return contents.concat(null)
            })

    })
    return newAcc

}, initPromise).then( console.log )
*/



