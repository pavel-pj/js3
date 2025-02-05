import fsp from 'fs/promises';
import _ from 'lodash';

import normalize from './src/ood/normalize.js';

const raw = [
    { name: 'istanbul', country: 'turkey' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'iStanbul', country: 'tUrkey' },
    { name: 'antalia', country: 'turkeY ' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Miami', country: 'usa' },
];

 console.log(normalize(raw));
