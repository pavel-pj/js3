import fsPromises from 'fs/promises';

export const getTypes = (files) => {
  const initPromise = Promise.resolve([]);

  const promise = files.reduce((acc, path) => {
    const newAcc = acc.then((contents) => fsPromises.stat(path)
      .then((res) => {
        const type = () => (res.isDirectory() ? 'directory' : 'file');
        return contents.concat(type());
      })
      .catch((e) => contents.concat(null)));
    return newAcc;
  }, initPromise);

  return promise;
};
export default getTypes;
