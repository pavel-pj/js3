
export const get = (obj, key, defaultVal = "null") => {


    if (Object.hasOwn(obj,key) === false  ){
        return defaultVal;
    }

    return obj[key];

}

export default get;