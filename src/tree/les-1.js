 const removeFirstLevel = (tree) =>
{
  

    return tree.filter((item)=>{

        return Array.isArray(item)

    }).flat();


}

export {removeFirstLevel} ;