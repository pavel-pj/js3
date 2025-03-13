import _ from 'lodash';

export const getChildren = (users) => users.map((user) => user.children).flat();

export default getChildren;
