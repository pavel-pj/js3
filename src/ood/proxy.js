export function proxy (obj) {


    const handler = {
        get : (target,prop) =>{

            if(prop in target) {
                return target[prop]
            }
            return 'XXX'
         },

         set: (target,prop,value) =>{

            if(prop in target) {
                return true;
            } else {
                throw new Error(`Cannot rewrite non-existed property '${prop}'`);
            }

         }



    }


    return new Proxy(obj,handler);



}

export default proxy;