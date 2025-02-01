const makePoint = (x, y) => {
    const point = {
        angle: Math.atan2(y, x),
        radius: Math.sqrt((x ** 2) + (y ** 2)),
    };

    return point;
};

const getX = (point) => {

    const {angle,radius} = point
    const x =  Math.round(radius *  Math.cos(angle)) ;

    return x;
}

const getY = (point) => {
    const {angle,radius} = point
    const y =  Math.round(radius * Math.sin(angle));
    return y;
}

export { makePoint, getX, getY };
