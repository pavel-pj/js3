import _ from 'lodash';

export const getChildren =(users) =>
{
    return users.map((user)=>{

            return user.children
    }).flat();

}

export default getChildren