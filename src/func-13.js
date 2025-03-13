import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

export const getFreeDomainCount = (emails) => emails
  .map((item) => {
    const [, domain] = item.split('@');
    return domain;
  })
  .filter((item) => freeEmailDomains.includes(item))
  .reduce((acc, item) => {
    if (Object.hasOwn(acc, item)) {
      acc[item] = acc[item] + 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

export default getFreeDomainCount;
