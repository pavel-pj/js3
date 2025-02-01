export const get = (obj,properties) =>
{

     if (properties.length === 0) return obj;

     const keys = properties.reverse();

    const readTree = (item,keys) => {
        const key = keys.pop();
            //Если есть такой ключ
            if (Object.hasOwn(item,key)) {
                  //смотрим дальше, если это объект
                if ( item[key] instanceof Object )
                 {
                     if (keys.length === 0) return item[key];
                     return readTree(item[key], keys)
                 }
                 else {
                    if (keys.length === 0) return item[key];
                    return null
                 }
            }
            //Если ключа нет
            else {

                return null
            }


    }

     return readTree(obj,keys);

}

export default get;