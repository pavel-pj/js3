import _ from 'lodash';
import * as fsTrees from '@hexlet/immutable-fs-trees';

const findFilesByName = (tree, str) => {
  const iter = (tree, acc, str) => {
    const name = fsTrees.getName(tree);

    if (fsTrees.isFile(tree)) {
      if (name.includes(str)) {
        return `${acc}/${name}`;
      }

      return '';
    }

    const newPath = `${acc}/${name}`;

    return fsTrees.getChildren(tree)
      .map((item) => iter(item, newPath, str))
      .flat()
      .filter((item) => item.length > 0)
      .map((item) => item.slice(1, item.length));
  };

  return iter(tree, '/', str);
};

export { findFilesByName };
