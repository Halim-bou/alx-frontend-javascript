export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error();
    }
    return numerator / denominator;
  } catch (e) {
    throw Error('cannot divide by 0');
  }
}
