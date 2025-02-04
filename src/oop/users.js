
import makeuser from './user.js'
export const getMutualFriends = (user1,user2) =>
{
    const total = [];
    total.push(user1.friends);
    total.push(user2.friends);

    const flatT = total.flat();
    const id =[];
    const result = [];

    for (const item of flatT )
    {

        if (id.includes(item.id)) {
            result.push(item)
        }
        id.push(item.id)

    }

    return result;


}