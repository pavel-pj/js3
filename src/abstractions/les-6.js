import {
  makeDecartPoint, getX, getY, getQuadrant,
} from './points.js';

const makeRectangle = (point, width, height) => {
  const rightTopPoint = makeDecartPoint(getX(point) + width, getY(point));
  const rightBottomPoint = makeDecartPoint(getX(rightTopPoint), getY(point) - height);
  const leftBottomPoint = makeDecartPoint(getX(point), getY(rightBottomPoint));

  const rectangle = {
    leftTopPoint: point,
    rightTopPoint,
    rightBottomPoint,
    leftBottomPoint,
    width,
    height,
  };
  return rectangle;
};

const getStartPoint = (rectangle) => rectangle.leftTopPoint;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;
const containsOrigin = (rectangle) => {
  if (getQuadrant(rectangle.rightTopPoint) === 1
         && getQuadrant(rectangle.leftTopPoint) === 2
         && getQuadrant(rectangle.leftBottomPoint) === 3
          && getQuadrant(rectangle.rightBottomPoint) === 4

  ) return true;
  return false;
};

export {
  makeRectangle, getStartPoint, getWidth, getHeight, containsOrigin,
};
