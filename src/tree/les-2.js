import * as fsTrees from '@hexlet/immutable-fs-trees';

const makeTree = () => {
  const tree = fsTrees.mkdir('nodejs-package', [
    fsTrees.mkfile('Makefile'),
    fsTrees.mkfile('README.md'),
    fsTrees.mkdir('dist', []),
    fsTrees.mkdir('test', [
      fsTrees.mkfile('half.test.js', { type: 'text/javascript' }),
    ]),
    fsTrees.mkfile('babel.config.js', { type: 'text/javascript' }),
    fsTrees.mkdir('node_modules', [
    ], { owner: 'root', hidden: false }),
    fsTrees.mkdir('@babel', [
      fsTrees.mkdir('cli', [
        fsTrees.mkfile('LICENSE'),
      ]),
    ]),
  ], { hidden: true });

  return tree;
};

/*
nodejs-package # директория (метаданные: { hidden: true })
├── Makefile # файл
├── README.md # файл
├── dist # пустая директория
├── __tests__ # директория
│   └── half.test.js # файл (метаданные: { type: 'text/javascript' })
├── babel.config.js # файл (метаданные: { type: 'text/javascript' })
└── node_modules # директория (метаданные: { owner: 'root', hidden: false })
└── @babel # директория
        └── cli # директория
            └── LICENSE # файл
*/

export { makeTree };
