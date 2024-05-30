async function divideSubFunction(a, b) {
  if (b === 0) {
    throw new Error('cannot divide by 0');
  }
  return a * b;
}

export default function divideFunction(numerator, denominator) {
  try {
    divideSubFunction(numerator, denominator);
  } catch (e) {
    console.log(e);
  }
}
