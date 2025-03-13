export const getGirlFriends = (users) => users.map((item) => item.friends)
  .flat()
  .filter((friend) => friend.gender === 'female');

export default getGirlFriends;
