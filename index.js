import fsp from 'fs/promises';
import _ from 'lodash';
import makeUser from './src/oop/les-1.js';
import { Point,getX,getY } from './src/oop/Point.js';
import { Segment, getBeginPoint,getEndPoint} from './src/oop/Segment.js';
import {reverse} from './src/oop/solution.js'

let beginPoint = new Point(1, 10);
let endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);


const reversedSegment = reverse(segment);

// прямое обращение к свойствам приведено только в демонстрационных целях
console.log(
    segment.beginPoint.x,
    segment.beginPoint.y,
    segment.endPoint.x,
    segment.endPoint.y,
);// => 1 10 11 -3

console.log(
    reversedSegment.beginPoint.x,
    reversedSegment.beginPoint.y,
    reversedSegment.endPoint.x,
    reversedSegment.endPoint.y,
); // => 11 -3 1 10