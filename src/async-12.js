import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';

export const getDirectorySize = (path) => {
  const promise = fsp.readdir(path).then((data) => data.map((item) => `${path}/${item}`)).then((d) => {
    // Возвращаем вес файла
    const promises = d.map((item) => fsp.stat(item).then((file) => (file.isDirectory() ? 0 : file.size)));

    // Общий промис с размером файлов
    return Promise.all(promises)
      .then((sizes) => _.sumBy(sizes));
  });

  return promise;
};

export default getDirectorySize;
