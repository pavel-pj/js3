import fsp from 'fs/promises';

export const  exchange = async (file1,file2) => {

    const txt1 = await fsp.readFile(file1,'UTF-8');
    const txt2 = await fsp.readFile(file2,'UTF-8');

   await fsp.writeFile(file1,txt2);
   await fsp.writeFile(file2,txt1);


}

export default exchange;