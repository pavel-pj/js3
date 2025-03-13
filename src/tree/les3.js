import _ from 'lodash';
import * as fsTrees from '@hexlet/immutable-fs-trees';

function getHiddenFilesCount(tree) {
  const name = fsTrees.getName(tree);

  if (fsTrees.isFile(tree)) {
    if (name.slice(0, 1) == '.') {
      return 1;
    }
    return 0;
  }
  const children = fsTrees.getChildren(tree);

  const childs = children.map((item) => getHiddenFilesCount(item));

  return _.sum(childs);
}

export { getHiddenFilesCount };
