export const getGirlFriends = (users) =>{

    return users.map((item) =>{
        return item.friends
    })
        .flat()
        .filter((friend) => friend.gender === 'female')
        

}

export default getGirlFriends;