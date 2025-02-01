export const groupBy =(users, property ) => {



    if (users.length === 0 || property ==='') return [];

    return users.reduce((acc,item) => {
        console.log(item[property])
        //const new
         if(Object.hasOwn(acc, item[property] )){
            acc[item[property]].push(item)
         }
        else {
            acc[item[property]] = [item]
         }
        return acc;

    }, {});



}

export default groupBy;