import fsPromises from 'fs/promises';
export const getTypes = (files) => {

    const initPromise = Promise.resolve([]);

    const promise = files.reduce((acc, path) => {
        const newAcc = acc.then((contents) => {
            return fsPromises.stat(path)
                .then((res) => {
                    const type = () => {
                        return res.isDirectory() ? 'directory' : 'file';
                    }
                    return contents.concat(type())
                })
                .catch(e => {
                    return contents.concat(null)
                })

        })
        return newAcc

    }, initPromise)

    return promise;

}
export default getTypes;


