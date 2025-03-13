
export const set = (obj ,key, value) => {


    if (Object.hasOwn(obj,key)){
        return;
    }
     
    obj[key] = value;

}

export default set;