import {Point} from './Point.js';
import {Segment} from './Segment.js';

function  reverse({beginPoint,endPoint}) {

    //console.log(`beginPoint: ${beginPoint()}, endPoint :${endPoint()}`)
    const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
    const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());

    return new Segment (newBeginPoint,newEndPoint);

}

export {reverse}

