export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divid by 0');
    }
    return numerator / denominator;
  } catch (e) {
    throw Error(e);
  }
}
