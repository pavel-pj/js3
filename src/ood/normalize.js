export function normalize (countries) {

    const norm = countries.map ((item) =>{
         return {
             name: item.name.trim().toLowerCase() ,
             country: item.country.trim().toLowerCase()
       }
    }).sort((itemA,itemB) =>{

        if (itemA.name<itemB.name) {
            return -1
        }
        if (itemA.name > itemB.name){
            return 1
        }
        return 0;

    })
        .reduce((acc,item) =>{

        if(!Object.hasOwn(acc, item.country )) {
            acc[item.country] = []
        }
        if (! acc[item.country].includes(item.name)) {
            acc[item.country].push(item.name)
        }

         return acc;

    }, {})
 
    return norm;


}

export default normalize;