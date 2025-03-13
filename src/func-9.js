import _ from 'lodash';

export const takeOldest = (users, num = 1) => {
  const now = Date.now();

  const newUsers = users.sort((a, b) => {
    const ageA = now - Date.parse(a.birthday);
    const ageB = now - Date.parse(b.birthday);

    return (ageA < ageB) ? 1 : -1;
  });
  return _.take(newUsers, num);
};

export default takeOldest;
