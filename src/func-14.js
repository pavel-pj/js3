export const sequenceSum = (begin, end) => {
  if (begin > end) return NaN;
  if (begin === end) return begin;

  if (begin === end) return begin;
  return end + sequenceSum(begin, end - 1);
};

export default sequenceSum;
